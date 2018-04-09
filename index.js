
function printHTML(url, resourceType, i) {
  // remove "s"
  let tagName;
  const attributes = [];
  switch (resourceType) {
  case 'scripts':
    tagName = 'script';
    attributes.push(
      ['type', 'text/javascript'],
      ['src', url],

    );
    break;
  case 'styles':
    tagName = 'link';
    attributes.push(
      ['type', 'text/css'],
      ['rel', 'stylesheet'],
      ['href', url],
    );
    break;
  default:
    tagName = 'div';
    break;
  }
  attributes.push(['id', `onbrand-resource-${tagName}-${i}`]);
  const tag = document.createElement(tagName);
  attributes.forEach(attrPair => tag.setAttribute(attrPair[0], attrPair[1]));
  console.log(tag);
  return tag;
}

/**
 * Ensure a trailing slash and no leading slash are preasent on the folder
 * @param {String} string
 */
function normalizeSlashes(string) {
  let normalizedString = string;
  if (normalizedString[0] === '/') normalizedString = normalizedString.slice(1, string.length);
  if (normalizedString[normalizedString.length - 1] !== '/') normalizedString += '/';
  return normalizedString;
}

class Onbrand {
  constructor(options) {
    this.cihostFolder = normalizeSlashes(options.cihostFolder);
    this.queryStringIncluded = Onbrand.checkForQueryString();
    this.mode = this.queryStringIncluded ? 'development' : 'production';
    this.styles = this.generateUrls(options.styles);
    this.scripts = this.generateUrls(options.scripts);
  }
  static checkForQueryString() {
    const url = window.location.href;
    if (url.indexOf('?onbrand') !== -1 || url.indexOf('&onbrand') !== -1) {
      return true;
    }
    return false;
  }
  generateUrls(arrayOfFileNames) {
    const urlBase = this.mode === 'development' ? '/build/' : `//cihost.uberflip.com/${this.cihostFolder}/`;
    return arrayOfFileNames.map(fileName => urlBase + fileName);
  }
  printResources(type) {
    const resourceType = type.toLowerCase().trim();
    const options = ['scripts', 'styles'];
    if (options.indexOf(resourceType) < 0) {
      throw new Error(`${resourceType} is not a recognized resource type. Please use one of: ${options.join(', ')}`);
    }
    const toPrint = this[resourceType];
    toPrint.forEach((url, i) => printHTML(url, resourceType, i));
  }
}

window.Onbrand = Onbrand;

!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),o=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.cihostFolder=r.cihostFolder,this.queryStringIncluded=e.checkForQueryString(),this.mode=this.queryStringIncluded?"devlopment":"production",this.styles=this.generateUrls(r.styles),this.scripts=this.generateUrls(r.scripts)}return n(e,[{key:"generateUrls",value:function(e){var r="development"===this.mode?"/build/":"//cihost.uberflip.com/"+this.cihostFolder+"/";return e.map(function(e){return r+e})}},{key:"printResources",value:function(e){var r=e.toLowerCase().trim(),t=["scripts","styles"];if(t.indexOf(r)<0)throw new Error(r+" is not a recognized resource type. Please use one of: "+t.join(", "));this[r].forEach(function(e,t){return function(e,r,t){var n=void 0,o=[];switch(r){case"scripts":n="script",o.push(["type","text/javascript"],["src",e]);break;case"styles":n="link",urlAttribute="href",relAttribute="rel",relValue="",o.push(["type","text/css"],["rel","stylesheet"],["href",e]);break;default:n="div"}o.push(["id","onbrand-resource-"+n+"-"+t]);var i=document.createElement(n);return o.forEach(function(e){return i.setAttribute(e[0],e[1])}),console.log(i),i}(e,r,t)})}}],[{key:"checkForQueryString",value:function(){var e=window.location.href;return-1!==e.indexOf("?onbrand")||-1!==e.indexOf("&onbrand")}}]),e}();window.Onbrand=o}]);
//# sourceMappingURL=onbrand-global-library.bundle.js.map
(()=>{function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t,r,n,o=globalThis,i={},a={},l=o.parcelRequiree62f;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},o.parcelRequiree62f=l);var s=l.register;s("d0TNe",function(t,r){var n,o;e(t.exports,"DOM_SHOT_EXT_NAME",()=>i),e(t.exports,"DOM_SHOT_EXT_BG_NAME",()=>a),e(t.exports,"DOM_SHOT_EXT_ACTION",()=>n);let i="dom_shot_chrome_extension",a="dom_shot_chrome_extension_bg";(o=n||(n={}))[o.ready=0]="ready",o[o.domShot=1]="domShot"}),s("afMVx",function(t,r){e(t.exports,"doDomShotAction",()=>i),e(t.exports,"domShotLog",()=>a),e(t.exports,"domShotError",()=>s),e(t.exports,"domShotVersion",()=>c);var n=l("d0TNe"),o=l("hsKA8");let i=(e,t)=>{console.log("[dodo] ","postmessage"),window.postMessage({source:n.DOM_SHOT_EXT_NAME,action:e,payload:t},"*")},a=(e,...t)=>{console.log("[\uD83D\uDD38DOM_SHOT\uD83D\uDD38]",e,...t)},s=(e,...t)=>{console.error("[\uD83D\uDD38DOM_SHOT\uD83D\uDD38]",e,...t)},c=()=>{console.log(`[\u{1F538}DOM_SHOT\u{1F538}] \u{63D2}\u{4EF6}\u{7248}\u{672C}%c v${o.version} at ${o.buildTime}`,"color: orange;")}}),s("hsKA8",function(e,t){e.exports=JSON.parse('{"name":"dom-shot-chrome-extension","version":"0.1.4","buildTime":"2024-08-09","source":"src/index.html","description":"dom-shot-chrome-extension","dependencies":{"clsx":"^1.2.1","dayjs":"^1.11.7","html-to-image":"^1.11.11","mobx":"^6.12.3","react":"^18.2.0","react-dom":"^18.2.0","react-draggable":"^4.4.6","react-select":"^5.7.7"},"devDependencies":{"@parcel/transformer-less":"^2.9.3","@types/node":"^20.6.5","@types/react":"18.0","@types/react-dom":"18.0","chrome-types":"^0.1.231","html2canvas":"^1.4.1","parcel":"^2.8.3","postcss":"^8.4.30","postcss-modules":"^4.3.1","process":"^0.11.10"},"scripts":{"start":"parcel src/index.tsx src/popup.html  --no-cache","start:bg":"parcel build src/background.ts --no-cache","build":"rm -rf dist/; parcel build src/background.ts src/helper.ts src/index.tsx src/devtools.html src/sidebar.html --no-content-hash --no-cache;sh deploy.sh","test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/DearDawn/dom-shot.git"},"keywords":[],"author":"","license":"ISC","bugs":{"url":"https://github.com/DearDawn/dom-shot/issues"},"homepage":"https://github.com/DearDawn/dom-shot"}')});var c=l("d0TNe"),u=l("afMVx"),h={},d=h={};function f(){throw Error("setTimeout has not been defined")}function m(){throw Error("clearTimeout has not been defined")}function g(e){if(t===setTimeout)return setTimeout(e,0);if((t===f||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:f}catch(e){t=f}try{r="function"==typeof clearTimeout?clearTimeout:m}catch(e){r=m}}();var p=[],w=!1,y=-1;function b(){w&&n&&(w=!1,n.length?p=n.concat(p):y=-1,p.length&&E())}function E(){if(!w){var e=g(b);w=!0;for(var t=p.length;t;){for(n=p,p=[];++y<t;)n&&n[y].run();y=-1,t=p.length}n=null,w=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===m||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function S(){}d.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new v(e,t)),1!==p.length||w||g(E)},v.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=S,d.addListener=S,d.once=S,d.off=S,d.removeListener=S,d.removeAllListeners=S,d.emit=S,d.prependListener=S,d.prependOnceListener=S,d.listeners=function(e){return[]},d.binding=function(e){throw Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw Error("process.chdir is not supported")},d.umask=function(){return 0};let T=(()=>{let e=0,t=()=>`0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function x(e){let t=[];for(let r=0,n=e.length;r<n;r++)t.push(e[r]);return t}function D(e,t){let r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function _(e,t={}){return{width:t.width||function(e){let t=D(e,"border-left-width"),r=D(e,"border-right-width");return e.clientWidth+t+r}(e),height:t.height||function(e){let t=D(e,"border-top-width"),r=D(e,"border-bottom-width");return e.clientHeight+t+r}(e)}}function O(e){return new Promise((t,r)=>{let n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function C(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function A(e,t,r){let n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${r}`),o.setAttribute("viewBox",`0 0 ${t} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),C(o)}let M=(e,t)=>{if(e instanceof t)return!0;let r=Object.getPrototypeOf(e);return null!==r&&(r.constructor.name===t.name||M(r,t))};function $(e,t,r){let n=window.getComputedStyle(e,r),o=n.getPropertyValue("content");if(""===o||"none"===o)return;let i=T();try{t.className=`${t.className} ${i}`}catch(e){return}let a=document.createElement("style");a.appendChild(function(e,t,r){let n=`.${e}:${t}`,o=r.cssText?function(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(r):x(r).map(e=>{let t=r.getPropertyValue(e),n=r.getPropertyPriority(e);return`${e}: ${t}${n?" !important":""};`}).join(" ");return document.createTextNode(`${n}{${o}}`)}(i,r,n)),t.appendChild(a)}let L="application/font-woff",N="image/jpeg",P={woff:L,woff2:L,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:N,jpeg:N,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function R(e){return P[(function(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""})(e).toLowerCase()]||""}function H(e){return -1!==e.search(/^(data:)/)}function I(e,t){return`data:${t};base64,${e}`}async function k(e,t,r){let n=await fetch(e,t);if(404===n.status)throw Error(`Resource "${n.url}" not found`);let o=await n.blob();return new Promise((e,t)=>{let i=new FileReader;i.onerror=t,i.onloadend=()=>{try{e(r({res:n,result:i.result}))}catch(e){t(e)}},i.readAsDataURL(o)})}let V={};async function F(e,t,r){var n,o,i;let a,l;let s=(n=e,o=t,i=r.includeQueryParams,l=n.replace(/\?.*/,""),i&&(l=n),/ttf|otf|eot|woff2?/i.test(l)&&(l=l.replace(/.*\//,"")),o?`[${o}]${l}`:l);if(null!=V[s])return V[s];r.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());try{let n=await k(e,r.fetchRequestInit,({res:e,result:r})=>(t||(t=e.headers.get("Content-Type")||""),r.split(/,/)[1]));a=I(n,t)}catch(n){a=r.imagePlaceholder||"";let t=`Failed to fetch resource: ${e}`;n&&(t="string"==typeof n?n:n.message),t&&console.warn(t)}return V[s]=a,a}async function U(e){let t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):O(t)}async function j(e,t){if(e.currentSrc){let t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.clientWidth,t.height=e.clientHeight,null==r||r.drawImage(e,0,0,t.width,t.height),O(t.toDataURL())}let r=e.poster,n=R(r);return O(await F(r,n,t))}async function q(e){var t;try{if(null===(t=null==e?void 0:e.contentDocument)||void 0===t?void 0:t.body)return await G(e.contentDocument.body,{},!0)}catch(e){}return e.cloneNode(!1)}async function X(e,t){return M(e,HTMLCanvasElement)?U(e):M(e,HTMLVideoElement)?j(e,t):M(e,HTMLIFrameElement)?q(e):e.cloneNode(!1)}let W=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();async function z(e,t,r){var n,o;let i=[];return W(e)&&e.assignedNodes?i=x(e.assignedNodes()):M(e,HTMLIFrameElement)&&(null===(n=e.contentDocument)||void 0===n?void 0:n.body)?i=x(e.contentDocument.body.childNodes):i=x((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes),0===i.length||M(e,HTMLVideoElement)||await i.reduce((e,n)=>e.then(()=>G(n,r)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}async function B(e,t){let r=e.querySelectorAll?e.querySelectorAll("use"):[];if(0===r.length)return e;let n={};for(let o=0;o<r.length;o++){let i=r[o].getAttribute("xlink:href");if(i){let r=e.querySelector(i),o=document.querySelector(i);r||!o||n[i]||(n[i]=await G(o,t,!0))}}let o=Object.values(n);if(o.length){let t="http://www.w3.org/1999/xhtml",r=document.createElementNS(t,"svg");r.setAttribute("xmlns",t),r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.style.display="none";let n=document.createElementNS(t,"defs");r.appendChild(n);for(let e=0;e<o.length;e++)n.appendChild(o[e]);e.appendChild(r)}return e}async function G(e,t,r){return r||!t.filter||t.filter(e)?Promise.resolve(e).then(e=>X(e,t)).then(r=>z(e,r,t)).then(t=>{var r,n;return r=e,M(n=t,Element)&&(!function(e,t){let r=t.style;if(!r)return;let n=window.getComputedStyle(e);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):x(n).forEach(o=>{let i=n.getPropertyValue(o);if("font-size"===o&&i.endsWith("px")){let e=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${e}px`}M(e,HTMLIFrameElement)&&"display"===o&&"inline"===i&&(i="block"),"d"===o&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),r.setProperty(o,i,n.getPropertyPriority(o))})}(r,n),$(r,n,":before"),$(r,n,":after"),M(r,HTMLTextAreaElement)&&(n.innerHTML=r.value),M(r,HTMLInputElement)&&n.setAttribute("value",r.value),function(e,t){if(M(e,HTMLSelectElement)){let r=Array.from(t.children).find(t=>e.value===t.getAttribute("value"));r&&r.setAttribute("selected","")}}(r,n)),n}).then(e=>B(e,t)):null}let K=/url\((['"]?)([^'"]+?)\1\)/g,J=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Q=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function Y(e,t,r,n,o){try{let i;let a=r?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let r=document.implementation.createHTMLDocument(),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),t&&(n.href=t),o.href=e,o.href}(t,r):t,l=R(t);if(o){let e=await o(a);i=I(e,l)}else i=await F(a,l,n);return e.replace(function(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${i}$3`)}catch(e){}return e}function Z(e){return -1!==e.search(K)}async function ee(e,t,r){if(!Z(e))return e;let n=function(e,{preferredFontFormat:t}){return t?e.replace(Q,e=>{for(;;){let[r,,n]=J.exec(e)||[];if(!n)return"";if(n===t)return`src: ${r};`}}):e}(e,r);return(function(e){let t=[];return e.replace(K,(e,r,n)=>(t.push(n),e)),t.filter(e=>!H(e))})(n).reduce((e,n)=>e.then(e=>Y(e,n,t,r)),Promise.resolve(n))}async function et(e,t,r){var n;let o=null===(n=t.style)||void 0===n?void 0:n.getPropertyValue(e);if(o){let n=await ee(o,null,r);return t.style.setProperty(e,n,t.style.getPropertyPriority(e)),!0}return!1}async function er(e,t){await et("background",e,t)||await et("background-image",e,t),await et("mask",e,t)||await et("mask-image",e,t)}async function en(e,t){let r=M(e,HTMLImageElement);if(!(r&&!H(e.src))&&!(M(e,SVGImageElement)&&!H(e.href.baseVal)))return;let n=r?e.src:e.href.baseVal,o=await F(n,R(n),t);await new Promise((t,n)=>{e.onload=t,e.onerror=n,e.decode&&(e.decode=t),"lazy"===e.loading&&(e.loading="eager"),r?(e.srcset="",e.src=o):e.href.baseVal=o})}async function eo(e,t){let r=x(e.childNodes).map(e=>ei(e,t));await Promise.all(r).then(()=>e)}async function ei(e,t){M(e,Element)&&(await er(e,t),await en(e,t),await eo(e,t))}let ea={};async function el(e){let t=ea[e];if(null!=t)return t;let r=await fetch(e);return t={url:e,cssText:await r.text()},ea[e]=t,t}async function es(e,t){let r=e.cssText,n=/url\(["']?([^"')]+)["']?\)/g;return Promise.all((r.match(/url\([^)]+\)/g)||[]).map(async o=>{let i=o.replace(n,"$1");return i.startsWith("https://")||(i=new URL(i,e.url).href),k(i,t.fetchRequestInit,({result:e})=>(r=r.replace(o,`url(${e})`),[o,e]))})).then(()=>r)}function ec(e){if(null==e)return[];let t=[],r=e.replace(/(\/\*[\s\S]*?\*\/)/gi,""),n=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let e=n.exec(r);if(null===e)break;t.push(e[0])}r=r.replace(n,"");let o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(r);if(null===e){if(null===(e=i.exec(r)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}async function eu(e,t){let r=[],n=[];return e.forEach(r=>{if("cssRules"in r)try{x(r.cssRules||[]).forEach((e,o)=>{if(e.type===CSSRule.IMPORT_RULE){let i=o+1,a=e.href,l=el(a).then(e=>es(e,t)).then(e=>ec(e).forEach(e=>{try{r.insertRule(e,e.startsWith("@import")?i+=1:r.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})).catch(e=>{console.error("Error loading remote css",e.toString())});n.push(l)}})}catch(i){let o=e.find(e=>null==e.href)||document.styleSheets[0];null!=r.href&&n.push(el(r.href).then(e=>es(e,t)).then(e=>ec(e).forEach(e=>{o.insertRule(e,r.cssRules.length)})).catch(e=>{console.error("Error loading remote stylesheet",e)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(e.forEach(e=>{if("cssRules"in e)try{x(e.cssRules||[]).forEach(e=>{r.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),r))}async function eh(e,t){if(null==e.ownerDocument)throw Error("Provided element is not within a Document");let r=x(e.ownerDocument.styleSheets);return(await eu(r,t)).filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Z(e.style.getPropertyValue("src")))}async function ed(e,t){let r=await eh(e,t);return(await Promise.all(r.map(e=>{let r=e.parentStyleSheet?e.parentStyleSheet.href:null;return ee(e.cssText,r,t)}))).join("\n")}async function ef(e,t){let r=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await ed(e,t);if(r){let t=document.createElement("style"),n=document.createTextNode(r);t.appendChild(n),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function em(e,t={}){let{width:r,height:n}=_(e,t),o=await G(e,t,!0);return await ef(o,t),await ei(o,t),!function(e,t){let{style:r}=e;t.backgroundColor&&(r.backgroundColor=t.backgroundColor),t.width&&(r.width=`${t.width}px`),t.height&&(r.height=`${t.height}px`);let n=t.style;null!=n&&Object.keys(n).forEach(e=>{r[e]=n[e]})}(o,t),await A(o,r,n)}async function eg(e,t={}){let{width:r,height:n}=_(e,t),o=await em(e,t),i=await O(o),a=document.createElement("canvas"),l=a.getContext("2d"),s=t.pixelRatio||function(){let e,t;try{t=h}catch(e){}let r=t&&t.env?t.env.devicePixelRatio:null;return r&&Number.isNaN(e=parseInt(r,10))&&(e=1),e||window.devicePixelRatio||1}(),c=t.canvasWidth||r,u=t.canvasHeight||n;return a.width=c*s,a.height=u*s,!t.skipAutoScale&&(a.width>16384||a.height>16384)&&(a.width>16384&&a.height>16384?a.width>a.height?(a.height*=16384/a.width,a.width=16384):(a.width*=16384/a.height,a.height=16384):a.width>16384?(a.height*=16384/a.width,a.width=16384):(a.width*=16384/a.height,a.height=16384)),a.style.width=`${c}`,a.style.height=`${u}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,a.width,a.height)),l.drawImage(i,0,0,a.width,a.height),a}async function ep(e,t={}){return(await eg(e,t)).toDataURL()}var c=l("d0TNe"),u=l("afMVx");let ew=async()=>{(0,u.domShotLog)("开始生成截图");let e=window.DOM_SHOT_EXT_DOM||null;if(!e){(0,u.domShotError)("未找到 DOM");return}(0,u.domShotLog)("图像处理中..."),await ey(e),(0,u.domShotLog)("开始截图..."),ep(e,{backgroundColor:"transparent"}).then(e=>{(0,u.domShotLog)("截图完成！\uD83C\uDF89"),window.postMessage({source:c.DOM_SHOT_EXT_BG_NAME,action:c.DOM_SHOT_EXT_ACTION.domShot,payload:e},"*")}).catch(console.error)};async function ey(e){let t=[...Array.from(e.querySelectorAll("img")).filter(e=>!e.hasAttribute("data-dom-shot-replaced")),...Array.from(e.querySelectorAll("*")).filter(e=>{let t=window.getComputedStyle(e).backgroundImage;return t&&"none"!==t&&t.startsWith("url")&&!e.hasAttribute("data-dom-shot-replaced")})];await Promise.all(t.map(e=>{if("img"===e.tagName.toLowerCase())return eb(e,e?.src);{let t=window.getComputedStyle(e).backgroundImage.match(/url\("?(.+?)"?\)/)[1];return eb(e,t)}}))}function eb(e,t){return new Promise((r,n)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=function(){let t=document.createElement("canvas");t.width=o.width,t.height=o.height,t.getContext("2d").drawImage(o,0,0);let n=t.toDataURL("image/png");"img"===e.tagName.toLowerCase()?e.src=n:e.style.backgroundImage=`url(${n})`,e.setAttribute("data-dom-shot-replaced","true"),r(!0)},o.onerror=n,o.src=t})}let eE="dom_shot_ext_helper";if(window[eE])window[eE].init();else{let e=new class{constructor(e){this.clearEvent=()=>{},this.init=async()=>{this.clearEvent(),this.initUtils()},(0,u.domShotVersion)(),this.tabId=e||0}initUtils(){let e=async e=>{if(e?.data?.source!==c.DOM_SHOT_EXT_NAME)return;let{action:t}=e.data||{};this.utilsActionMap[t]?.()};this.clearEvent=()=>{window.removeEventListener("message",e),window.removeEventListener("beforeunload",this.clearEvent)},window.addEventListener("message",e),window.addEventListener("beforeunload",this.clearEvent)}get utilsActionMap(){return{[c.DOM_SHOT_EXT_ACTION.domShot]:ew}}}(...window[c.DOM_SHOT_EXT_NAME]?.args||[]);window[eE]=e,e.init()}})();
//# sourceMappingURL=helper.js.map

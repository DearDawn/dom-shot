var e,t;(e=t||(t={}))[e.ready=0]="ready",e[e.domShot=1]="domShot",JSON.parse('{"name":"dom-shot-chrome-extension","version":"0.1.1","buildTime":"2024-08-09","source":"src/index.html","description":"dom-shot-chrome-extension","dependencies":{"clsx":"^1.2.1","dayjs":"^1.11.7","html-to-image":"^1.11.11","mobx":"^6.12.3","react":"^18.2.0","react-dom":"^18.2.0","react-draggable":"^4.4.6","react-select":"^5.7.7"},"devDependencies":{"@parcel/transformer-less":"^2.9.3","@types/node":"^20.6.5","@types/react":"18.0","@types/react-dom":"18.0","chrome-types":"^0.1.231","html2canvas":"^1.4.1","parcel":"^2.8.3","postcss":"^8.4.30","postcss-modules":"^4.3.1","process":"^0.11.10"},"scripts":{"start":"parcel src/index.tsx src/popup.html  --no-cache","start:bg":"parcel build src/background.ts --no-cache","build":"rm -rf dist/; parcel build src/background.ts src/helper.ts src/index.tsx src/devtools.html src/sidebar.html --no-content-hash --no-cache;sh deploy.sh","test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/DearDawn/dom-shot.git"},"keywords":[],"author":"","license":"ISC","bugs":{"url":"https://github.com/DearDawn/dom-shot/issues"},"homepage":"https://github.com/DearDawn/dom-shot"}');const s=(e,...t)=>{console.log("[\uD83D\uDD38DOM_SHOT\uD83D\uDD38]",e,...t)};chrome.devtools.panels.elements.createSidebarPane("DOM SHOT TOOL",function(e){e.setPage("sidebar.html");let t=function(){chrome.devtools.inspectedWindow.eval("window.DOM_SHOT_EXT_DOM=$0",{},()=>{chrome.runtime.sendMessage({action:"captureElement"})})};e.onShown.addListener(function(){chrome.devtools.inspectedWindow.eval("window.DOM_SHOT_EXT_DOM=$0",{},()=>{chrome.runtime.sendMessage({action:"captureElement"})}),s("截图准备就绪，请选择 DOM 元素"),chrome.devtools.panels.elements.onSelectionChanged.addListener(t)}),e.onHidden.addListener(function(){chrome.devtools.panels.elements.onSelectionChanged.removeListener(t)})});
//# sourceMappingURL=devtools.5e051feb.js.map

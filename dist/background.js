(()=>{var e,t;let r="dom_shot_chrome_extension";(t=e||(e={}))[t.ready=0]="ready",t[t.domShot=1]="domShot";let o=null,d=e=>{// 注入 tabId 参数
chrome.scripting.executeScript({target:{tabId:e},world:"MAIN",func:(...e)=>{window[r]=window[r]||{},window[r].args=e||[]},args:[e]}).then(()=>{// 执行脚本
chrome.scripting.executeScript({target:{tabId:e},world:"MAIN",files:["./helper.js"]})})};chrome.tabs.onUpdated.addListener((e,t,r)=>{"complete"===t.status&&r.url&&(clearTimeout(o),o=setTimeout(()=>{d(e)},100))})})();//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

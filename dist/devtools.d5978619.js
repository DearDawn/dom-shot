chrome.devtools.panels.elements.createSidebarPane("DOM SHOT",function(e){e.setPage("sidebar.html");let n=function(){chrome.devtools.inspectedWindow.eval("window.DOM_SHOT_EXT_DOM=$0",{},()=>{chrome.runtime.sendMessage({action:"captureElement"})})};e.onShown.addListener(function(){chrome.devtools.panels.elements.onSelectionChanged.addListener(n)}),e.onHidden.addListener(function(){chrome.devtools.panels.elements.onSelectionChanged.removeListener(n)})});//# sourceMappingURL=devtools.d5978619.js.map

//# sourceMappingURL=devtools.d5978619.js.map

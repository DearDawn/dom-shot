chrome.devtools.panels.elements.createSidebarPane(
  'DOM SHOT TOOL',
  function (sidebar) {
    sidebar.setPage('sidebar.html');

    const listener = function () {
      chrome.devtools.inspectedWindow.eval(`window.DOM_SHOT_EXT_DOM=$0`, {}, () => {
        chrome.runtime.sendMessage({ action: 'captureElement' });
      });
    };
    sidebar.onShown.addListener(function () {
      chrome.devtools.panels.elements.onSelectionChanged.addListener(listener);
    });
    sidebar.onHidden.addListener(function () {
      chrome.devtools.panels.elements.onSelectionChanged.removeListener(
        listener
      );
    });
  }
);

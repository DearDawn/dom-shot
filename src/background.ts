let timer = null;

const injectedHelper = (tabId: number) => {
  // 注入 tabId 参数
  chrome.scripting.executeScript({
    target: { tabId },
    world: "MAIN",
    func: (...args) => {
      const DOM_SHOT_EXT_NAME = 'dom_shot_chrome_extension';
      window[DOM_SHOT_EXT_NAME] = window[DOM_SHOT_EXT_NAME] || {};
      window[DOM_SHOT_EXT_NAME].args = args || [];
    },
    args: [tabId]
  }).then(() => {
    // 执行脚本
    chrome.scripting.executeScript({
      target: { tabId },
      world: "MAIN",
      files: ['./helper.js']
    });
  });
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      injectedHelper(tabId);
    }, 100);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "Access-Control-Allow-Origin", operation: "set", value: "*" }
          ]
        },
        condition: {
          resourceTypes: ["image"],
          urlFilter: "*"
        }
      }
    ],
    removeRuleIds: [1]
  });
});
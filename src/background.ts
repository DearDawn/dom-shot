import { DOM_SHOT_EXT_NAME } from "./utils/constant";

let timer = null;

const injectedHelper = (tabId: number) => {
  // 注入 tabId 参数
  chrome.scripting.executeScript({
    target: { tabId },
    world: "MAIN",
    func: (...args) => {
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

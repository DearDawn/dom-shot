import { DOM_SHOT_EXT_ACTION, DOM_SHOT_EXT_NAME } from "./utils/constant";
import { domShotVersion } from "./utils";
import { shotDom } from "./utils/dom";

class Helper {
  tabId: number;
  constructor (tabId?: number) {
    domShotVersion();
    this.tabId = tabId || 0;
  }

  clearEvent = () => { };

  init = async () => {
    this.clearEvent();
    this.initUtils();
  };

  initUtils () {
    const messageHandler = async (event: MessageEvent<any>) => {
      if (event?.data?.source !== DOM_SHOT_EXT_NAME) return;

      const { action } = event.data || {};

      this.utilsActionMap[action]?.();
    };

    this.clearEvent = () => {
      window.removeEventListener('message', messageHandler);
      window.removeEventListener('beforeunload', this.clearEvent);
    };

    window.addEventListener('message', messageHandler);
    window.addEventListener('beforeunload', this.clearEvent);
  }

  get utilsActionMap () {
    return {
      /** 给 DOM 截图，保留透明色 */
      [DOM_SHOT_EXT_ACTION.domShot]: shotDom,
    };
  }
}

const DOM_SHOT_HELPER_KEY = 'dom_shot_ext_helper';
if (window[DOM_SHOT_HELPER_KEY]) {
  window[DOM_SHOT_HELPER_KEY].init();
} else {
  const helper = new Helper(...(window[DOM_SHOT_EXT_NAME]?.args || []));
  window[DOM_SHOT_HELPER_KEY] = helper;
  helper.init();
}

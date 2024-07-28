import { useEffect } from 'react';
import { DOM_SHOT_EXT_ACTION, DOM_SHOT_EXT_BG_NAME } from '../utils/constant';
import { doDomShotAction, domShotLog } from '../utils';

export const useShot = () => {
  useEffect(() => {
    const listener = (request) => {
      if (request.action === 'captureElement') {
        domShotLog('节点已选择，请在侧边栏 [DOM SHOT] 查看');
        doDomShotAction(DOM_SHOT_EXT_ACTION.domShot);
      }
      return false;
    };

    chrome.runtime.onMessage.addListener(listener);

    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, []);
};

export const useInit = () => {
  useShot();

  // 接收 background 的事件
  useEffect(() => {
    const cb = (event: MessageEvent) => {
      const { source, action, payload } = event?.data || {};

      if (source !== DOM_SHOT_EXT_BG_NAME) return;

      if (action === DOM_SHOT_EXT_ACTION.domShot) {
        chrome.runtime.sendMessage({
          action: 'captureElementDone',
          payload: payload,
        });
      }
    };

    window.addEventListener('message', cb, false);

    return () => {
      window.removeEventListener('message', cb, false);
    };
  }, []);
};

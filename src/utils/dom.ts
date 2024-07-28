import { toPng } from 'html-to-image';
import { DOM_SHOT_EXT_ACTION, DOM_SHOT_EXT_NAME } from './constant';
import { domShotLog } from '.';

/** 给 DOM 截图，保留透明色 */
export const shotDom = () => {
  domShotLog('生成截图中，请在右侧查看');
  const element = window['DOM_SHOT_EXT_DOM'] || null;

  if (!element) return;

  toPng(element, {
    backgroundColor: 'transparent'
  }).then(imgData => {
    window.postMessage({
      source: DOM_SHOT_EXT_NAME,
      action: DOM_SHOT_EXT_ACTION.domShot,
      payload: imgData
    }, '*');
  }).catch(console.error);
};
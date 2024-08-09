import { toPng } from 'html-to-image';
import { DOM_SHOT_EXT_ACTION, DOM_SHOT_EXT_BG_NAME } from './constant';
import { domShotError, domShotLog } from '.';

/** 给 DOM 截图，保留透明色 */
export const shotDom = async () => {
  domShotLog('开始生成截图');
  const element = window['DOM_SHOT_EXT_DOM'] || null;

  if (!element) {
    domShotError('未找到 DOM');
    return;
  }

  domShotLog('图像处理中...');
  await replaceImagesInDOM(element);
  domShotLog('开始截图...');

  toPng(element, { backgroundColor: 'transparent' }).then(imgData => {
    domShotLog('截图完成！🎉');
    window.postMessage({
      source: DOM_SHOT_EXT_BG_NAME,
      action: DOM_SHOT_EXT_ACTION.domShot,
      payload: imgData
    }, '*');
  }).catch(console.error);
};

async function replaceImagesInDOM (domElement: HTMLDivElement) {
  // 获取所有 img 标签和包含背景图片的元素
  let imgElements = Array.from(domElement.querySelectorAll('img')).filter(element => !element.hasAttribute('data-dom-shot-replaced'));
  let bgElements = Array.from(domElement.querySelectorAll('*')).filter(element => {
    let backgroundImage = window.getComputedStyle(element).backgroundImage;
    return backgroundImage && backgroundImage !== "none" && backgroundImage.startsWith('url') && !element.hasAttribute('data-dom-shot-replaced');
  });

  // 合并并去重
  let elements = [...imgElements, ...bgElements];

  // 异步处理所有图像
  await Promise.all(elements.map(element => {
    if (element.tagName.toLowerCase() === "img") {
      return replaceImage(element, (element as HTMLImageElement)?.src);
    } else {
      let backgroundImage = window.getComputedStyle(element).backgroundImage;
      let url = backgroundImage.match(/url\("?(.+?)"?\)/)[1];
      return replaceImage(element, url);
    }
  }));
}

function replaceImage (element: any, url) {
  return new Promise((resolve, reject) => {
    let imgElement = new Image();
    imgElement.crossOrigin = "anonymous";
    imgElement.onload = function () {
      let canvas = document.createElement("canvas");
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(imgElement, 0, 0);
      let dataURL = canvas.toDataURL("image/png");
      if (element.tagName.toLowerCase() === "img") {
        element.src = dataURL; // 替换 img 标签的 src 属性
      } else {
        element.style.backgroundImage = `url(${dataURL})`; // 替换背景图片
      }
      element.setAttribute('data-dom-shot-replaced', 'true'); // 添加标记
      resolve(true);
    };
    imgElement.onerror = reject;
    imgElement.src = url;
  });
}

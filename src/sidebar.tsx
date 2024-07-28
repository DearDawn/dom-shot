import React, {
  FC,
  ReactElement,
  ReactNode,
  StrictMode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [imgSrc, setImgSrc] = useState('');
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = btn.current;

    if (!button) return;

    const listener1 = () => {
      const a = document.createElement('a');
      a.href = imgSrc;
      a.download = 'captured-image.png';
      a.click();
    };
    const listener2 = (request) => {
      if (request.action === 'captureElementDone') {
        setImgSrc(request.payload);
      } else if (request.action === 'captureElement') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length > 0) {
            const activeTabId = tabs[0].id;
            chrome.tabs.sendMessage(activeTabId, { action: 'captureElement' });
          }
        });
      }
      return false;
    };

    button.addEventListener('click', listener1);
    chrome.runtime.onMessage.addListener(listener2);

    return () => {
      button.removeEventListener('click', listener1);
      chrome.runtime.onMessage.removeListener(listener2);
    };
  }, []);

  return (
    <div>
      <h1>DOM截图（保留透明度）</h1>
      <button ref={btn} id='captureButton'>
        {imgSrc ? '下载' : '选择 DOM 后下载'}
      </button>
      {imgSrc ? (
        <img id='result' alt='截图' src={imgSrc} />
      ) : (
        <div className='empty-holder'>先在左侧选择 DOM</div>
      )}
    </div>
  );
};

const ROOT_ID = 'dom-shot-extension-dev-tools-root';
let domShotRoot = document.getElementById(ROOT_ID);

if (!domShotRoot) {
  domShotRoot = document.createElement('div');
  domShotRoot.id = ROOT_ID;
  document.body.append(domShotRoot);
}

const root = createRoot(domShotRoot);
root.render(
  // @ts-ignore
  <StrictMode>
    <App />
  </StrictMode>
);

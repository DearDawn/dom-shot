import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './page-app';

const ROOT_ID = 'dom-shot-extension-root';
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

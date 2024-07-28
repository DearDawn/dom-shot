import { DOM_SHOT_EXT_ACTION, DOM_SHOT_EXT_NAME } from "./constant";
import { version, buildTime } from '../../package.json'

export const isDev = () => {
  return process.env.NODE_ENV === 'development'
};

export const waitTime = async (timeout = 0) => {
  return new Promise(resolve => setTimeout(() => resolve(true), timeout))
}

export const doDomShotAction = (action: DOM_SHOT_EXT_ACTION, payload?: any) => {
  window.postMessage({ source: DOM_SHOT_EXT_NAME, action, payload }, '*');
}

export const domShotLog = (message?: any, ...optionalParams: any[]) => {
  console.log('[🔸DOM_SHOT🔸]', message, ...optionalParams)
}

export const domShotError = (message?: any, ...optionalParams: any[]) => {
  console.error('[🔸DOM_SHOT🔸]', message, ...optionalParams)
}

export const domShotVersion = () => {
  console.log(`[🔸DOM_SHOT🔸] 插件版本%c v${version} at ${buildTime}`, 'color: orange;')
}

import { scrollbarWidth } from '@xobotyi/scrollbar-width'

scrollbarWidth()

export function scrollLock(isLocked = false) {
  const body = document.documentElement;
  if (isLocked) {
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.style.paddingRight = `${scrollbarWidth()}px`;
  } else {
    body.style.overflow = "auto";
    body.style.touchAction = "unset";
    body.style.paddingRight = 'unset';
  }
}

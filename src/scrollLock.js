export function scrollLock(isLocked = false) {
  const body = document.documentElement;
  if (isLocked) {
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
  } else {
    body.style.overflow = "auto";
    body.style.touchAction = "unset";
  }
}

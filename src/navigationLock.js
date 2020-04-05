export function navigationLock(isLocked = false) {
  function trapUrl(event) {
    window.history.pushState({ isTrap: true }, "", window.location.pathname);
  }
  if (isLocked) {
    window.addEventListener("popstate", trapUrl);
    trapUrl();
  } else {
    window.removeEventListener("popstate", trapUrl);
  }
}

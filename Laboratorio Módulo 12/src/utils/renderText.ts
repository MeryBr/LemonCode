export const renderText = (selector: string, content: string): void => {
  const el = document.querySelector(selector);
  if (el instanceof HTMLElement) {
    el.textContent = content;
  }
};

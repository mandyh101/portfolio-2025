/**
 * Determines if the current environment is a mobile device based on window width.
 * 
 * @returns {boolean} True if the window's inner width is less than or equal to 1024 pixels, indicating a mobile device; otherwise, false.
 * If `window` is undefined (e.g., during server-side rendering), returns false.
 */

export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

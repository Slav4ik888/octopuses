import logger from '../client-logger/client-logger.js';

const log = logger(`screen.js`);

// Возвращает ширину экрана
export const getScreenSize = () => {
  let clientWidth = document.documentElement.clientWidth;
  log('clientWidth: ', clientWidth);

  return clientWidth;
};


export const isMobile  = (size) => size > 0 && size < 600;
export const isTablet  = (size) => size >= 600 && size < 960;
export const isLaptop  = (size) => size >= 960 && size < 1280;
export const isDesktop = (size) => size >= 1280;

// breakpoints: {
//   values: {
//     xs: 0,    // mobile
//     sm: 600,  // tablet
//     md: 960,  // laptop
//     lg: 1280, // desktop
//     xl: 1920,
//   },
// },

/**
 * Возвращает все утверждённые форматы
 * 
 * @param {*} size 
 * @returns {}
 */
export const getScreenFormats = (size) => ({
  isMobile: isMobile(size),
  isTablet: isTablet(size),
  isLaptop: isLaptop(size),
  isDesktop: isDesktop(size),
});
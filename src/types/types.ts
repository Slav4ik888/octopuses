export enum siteTitle {
  full = `Товары для здоровья «Осьминожки»`,
  small = `«Осьминожки»`,
};


export enum MimeType {
  JPEG = `image/jpeg`,
  JPG  = `image/jpg`,
  PNG  = `image/png`,
  GIF  = `image/gif`,
  PDF  = `./pdf`,
};


export interface ScreenFormats {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};
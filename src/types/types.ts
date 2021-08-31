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

export enum RouteType {
  ROOT = `/`,                      // Корневая папка
  LOGIN = `/login`,
  SIGNUP = `/singup`,
  CATALOG = `/catalog`,            // Каталог товаров

  POLICY = `/privacy-policy`,      // Политика конфиденциальности

  DEV = `/dev`,
};

export interface ScreenFormats {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};
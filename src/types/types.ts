
// Типы для списков
export enum ListSelectType {
  USERS = `Пользователи`,
  COMPANIES = `Компании`,
  TASK_STATUS = `Статус задания`,
  PAYERS = `Плательщики`,
};

// Тип для выделения данных из пути (ссылки) course
export interface PathInfo {
  type: string,
  value: string,
};

// Типы для Confirm
export enum ConfirmType {
  DEL = `Удалить`,
  SAVE = `Сохранить`,
  WITHOUT_SAVE = `Не сохранять`,
  NO_QUESTIONS = `Понятно`,
  ADD_TO_COURSE = `Добавить`,
};

// Типы для кнопки удаления
export enum DeleteBtnType {
  USER_PROFILE = `userProfile`,
  COMPANY_PROFILE = `companyProfile`,
  ANSWER_TASK = `answerTask`,
  COMPANY_PAYER = `companyPayer`,
};

export enum LogoBtnType {
  NAV_UP = `nav_up_btn`,
  NAV_DOWN = `nav_down_btn`,
  MAIN_PAGE = `main_page`,
};

// Кто открывает профиль 
export enum WhoInProfile {
  USER = `Сотрудник`,
  OWNER = `Владелец`,
  SUPER = `Супервайзер курса`,
};





// Для Login & Signup
export enum ToggleLoginSignup {
  LOGIN = `Войти`,
  SIGNUP = `Зарегистрироваться`,
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
  WORK = `/work`,
  COURSE = `/course`,              // Страница курса
  COURSE_ID = `/course/:taskId`,   // Курс по номеру задания
  USERS = `/users`,
  COMPANIES = `/companies`,
  LOGIN = `/login`,
  SIGNUP = `/singup`,
  PROFILE = `/profile`,

  POLICY = `/privacy-policy`,      // Политика конфиденциальности
  CONTRACT = `/contract`,          // Договор офферты

  DEV = `/dev`,
};

export interface ScreenFormats {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};
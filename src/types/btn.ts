
export enum LogoBtnType {
  NAV_UP = `nav_up_btn`,
  NAV_DOWN = `nav_down_btn`,
  AUTH = `auth`,
  MAIN_PAGE = `main_page`,
};


// Типы для списков
export enum ListSelectType {
  LOCATION = `Населённый пункт`,
  USERS = `Пользователи`,
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



export interface ScreenFormats {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};
// Типы состояние пользователя
export enum UserStatusType {
  NEW =  `Зарегистрировался`,
  CONFIRMED = `Подтвердил регистрацию`,
};


// Роли в приложении
export enum Role {
  SUPER = `Супер админ`,   // Я
  ADMIN = `Администратор`, // Мой помощник
  PARTNER = `Партнёр`,     // Наш франчайзи
  EMPLOYEE = `Сотрудник`,  // Сотрудник франчайзи или наш
  USER = `Клиент`,         // Клиент который имеет код и может копить баллы
};


// Кто открывает профиль 
export enum WhoInProfile {
  USER = `Клиент`,
  SUPER = `Супер админ`,
};



// ========================================= //
//        Registration & Login data          //
// ========================================= //


// Для Login & Signup
export enum ToggleLoginSignup {
  LOGIN = `Войти`,
  SIGNUP = `Зарегистрироваться`,
};


// Возможные города для регистрации
export interface Location {
  LOCATION: string,
};


// Запрашиваемые данные при регистрации аккаунта
export interface UserSignupData {
  location: string;        // Населённый пункт

  firstName: string | FormDataEntryValue;       // Имя
  secondName?: string | FormDataEntryValue;     // Фамилия
  middleName?: string | FormDataEntryValue;     // Отчество

  mobileNumber?: string | FormDataEntryValue;   // Номер телефона
  email: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
  confirmPassword: string | FormDataEntryValue;

  permissions: boolean;    // Разрешения на обработку персональных данных
  // isMobile: boolean;       // С какого устройства вошёл
};


// Запрашиваемые данные при входе в аккаунт
export interface UserLoginData {
  email: string | FormDataEntryValue;
  mobileNumber?: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
};



// ========================================= //
//   Registration Protection Case Sequence   //
// ========================================= //

// Тип для ошибок при неверном ответе
export type RegProtErrors = {
  description: string;
  errIds: Array<number>;
};

// Тип для элемента последовательности (вопросов квеста)
export type RegProtectSequenceItem = {
  id: number;
  title: string;
  url: string;
  wrongAnswer?: boolean;
};

// Ответ пользователя при регистрации
export interface RegProtectionCase {
  caseId: number;
  title: string;
  description: string;
  key: string;
  errors?: RegProtErrors;
  result: boolean;                         // Подтверждение в прохождении
  sequence: Array<RegProtectSequenceItem>;
};


// ========================================= //
//             USER PROFILE DATA             //
// ========================================= //


// При выборе нового элемента с помощью ListSelect 
export type NewUserStatusType = {
  status: UserStatusType;
};


export interface Fio {
  firstName: string;            // Имя
  secondName?: string;     // Фамилия
  middleName?: string;       // Отчество
};


// Профиль пользователя
export interface UserProfile {
  userId: string;
  displayName: string;    // Имя которое будет выводиться в бэйджиках
  avatarUrl: string;
  
  fio: Fio;
  email: string;          // korzan.va@mail.ru
  mobileNumber?: string;  // Номер телефона
  permissions: boolean;   // Разрешения на обработку персональных данных

  role: Role;
  emailVerified: boolean;
  status: UserStatusType;

  createdAt: string;
  lastChange: string;
};


// ========================================= //
//                FOR ADMIN                  //
// ========================================= //

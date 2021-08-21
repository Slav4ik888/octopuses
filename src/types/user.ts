// Типы состояние пользователя
export enum UserStatusType {
  NEW =  `Зарегистрировался`,
  CONFIRMED = `Подтвердил регистрацию`,
  INVOICE = `Выписал счёт`,
  PARTICIPAINT = `Проходит курс`,
  LOSTED = `Потерялся и не завершил курс`,
  COMPLECTIED = `Успешно завершил курс`,
  POSTED_REVIEW = `Оставил отзыв`,
};


// Роли в приложении
export enum Role {
  SUPER = `Супер админ`,   // Я
  ADMIN = `Администратор`, // Мой помощник
  PARTNER = `Партнёр`,     // Наш франчайзи
  EMPLOYEE = `Сотрудник`,  // Сотрудник франчайзи или наш
  AGENT = `Клиент`,        // Клиент который имеет код и может копить баллы
};



// ========================================= //
//        Registration & Login data          //
// ========================================= //


// Возможные города для регистрации
export enum Location {
  IRKUTSK = `Иркутск`,
};


// Запрашиваемые данные при регистрации аккаунта
export interface UserSignupData {
  name: string;            // Имя
  secondName?: string;     // Фамилия
  lastName?: string;       // Отчество
  mobileNumber?: number;    // Номер телефона
  email: string;
  password: string;
  confirmPassword: string;
  permissions: boolean;    // Разрешения на обработку персональных данных
  // isMobile: boolean;       // С какого устройства вошёл
};


// Запрашиваемые данные при входе в аккаунт
export interface UserLoginData {
  mobileNumber: number;
  password: string;
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


// Должность
export interface Executive {
  firstName: string;     // Имя
  secondName: string;    // Фамилия
  middleName: string;    // Отчество
  position: string;      // Должность
};

    
// Папка в разработке на курсе
export interface CourseFolder {
  folderName?: string;
  folderUrl?: string;
  checkListUrl?: string;
};


// Данные участника по прохождению курса
export interface CourseExecution {
  courseFolders: Array<CourseFolder>; // Ссылки на папки в разработке
};
  

// Профиль пользователя
export interface UserProfile {
  email: string;          // korzan.va@mail.ru
  userId: string;
  displayName: string;    // Имя которое будет выводиться в бэйджиках
  avatarUrl: string;
  
  executive: Executive;   // ФИО и должность
  
  role: Role;
  emailVerified: boolean;
  status: UserStatusType;

  companyName: string;
  companyId: string;

  courseExecution: CourseExecution;
  
  endCourse: string;      // Дата завершения курса
  isSertificate: boolean; // Разрешена ли выдача сертификата

  createdAt: string;
  lastChange: string;
};


// ========================================= //
//                FOR ADMIN                  //
// ========================================= //


export interface AdminUsersByStatus {
  status: UserStatusType;
  users: Array<UserProfile>; // Массив пользователей в этом статусе
}
import { MessageType } from './messages';


// Ошибки
export interface Errors {
  general?: string;
  permissions?: string;
  firstName?: string;
  secondName?: string;
  middleName?: string;
  location?: string;
  email?: string;
  mobileNumber?: string;
  password?: string;
  confirmPassword?: string;
};

export type Validation = {
  errors: Errors;
  valid: boolean;
};

// Тип для результата
export enum ResultType {
  SUCCESS = `success`,
  ERROR = `error`,
  WARNING = `warning`,
};

// Тип для данных по проведённой проверке
export interface ResultAccess {
  result: ResultType,
  message?: string,
  messageType?: MessageType,
};
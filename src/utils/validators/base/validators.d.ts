import { UserSignupData, UserLoginData, Role } from '../../../types/user';
import { Validation } from '../../../types/results';


export function isEmail(email: string): boolean;

export function isEmpty(str: string): boolean;
export function isNoEmpty(str: string): boolean;


// Возвращает true если строка допустимого значения
export function isValidMaxL(maxLength: number, str: string): boolean;

export function isValidMaxL30(str: string): boolean;
export function isValidMaxL100(str: string): boolean;
export function isValidMaxL300(str: string): boolean;
export function isValidMaxL1000(str: string): boolean;

export function isNoValidMaxL30(str: string): boolean;
export function isNoValidMaxL100(str: string): boolean;
export function isNoValidMaxL300(str: string): boolean;
export function isNoValidMaxL1000(str: string): boolean;


/**
 * Возвращает true если строка с цифрами установленного значения length
 * @param {number} length
 * @param {string} str стока из цифр
 * @returns 
 */
export function isValidNumberL(length: number, strNum: string): boolean;

export function isValidNumberL7(str: string): boolean;
export function isValidNumberL20(str: string): boolean;

export function isNoValidNumberL7(str: string): boolean;
export function isNoValidNumberL20(str: string): boolean;

// Является ли строка ИНН
export function isITN(ITN: string): boolean;
export function isNoITN(ITN: string): boolean;


// Проверяем данные на регистрацию пользователя
export function validationSignupData(data: UserSignupData): Validation;

// Проверяем email для восстановления пароля
export function validationEmailData(email: string): Validation;

// Проверяем данные resUser
export function validationResUserData(resUser: { userId: string, companyId: string }): Validation;


// Проверяем отправленный № сертификата
export function validationGetSertificatedata(data: string): Validation;

// Проверяем данные для входа пользователя
export function validationLoginData(data: UserLoginData): Validation;

// Валидация для доступа к комментариям
export function validationGetUserComments(req: {user: {userId: string, role: Role}}, taskOwnerId: string): Validation;
import { Role } from '../../../types/types-require.js';

export const isEmail = (email) => {
  if (!email) return false;
  
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) {
    return true;
  } else {
    return false;
  }
};

export const isEmpty = (str) => {
  if (!str || str.trim() === ``) {
    return true;
  } else {
    return false;
  }
};
export const isNoEmpty = (str) => !isEmpty(str);


// Возвращает true если строка допустимого значения
export const isValidMaxL = (maxLength, str) => {
  if (str === undefined) return false;
  if (typeof str !== `string`)  return false;
  if (str?.length < maxLength || str?.length === maxLength) return true;

  return false // console.log(`Нет совпадений по условиям...`);
};

export const isValidMaxL30 = (str) => isValidMaxL(30, str);
export const isValidMaxL100 = (str) => isValidMaxL(100, str);
export const isValidMaxL300 = (str) => isValidMaxL(300, str);
export const isValidMaxL1000 = (str) => isValidMaxL(1000, str);

export const isNoValidMaxL30 = (str) => !isValidMaxL(30, str);
export const isNoValidMaxL100 = (str) => !isValidMaxL(100, str);
export const isNoValidMaxL300 = (str) => !isValidMaxL(300, str);
export const isNoValidMaxL1000 = (str) => !isValidMaxL(1000, str);
// node src/server/validators/validators.js


/**
 * Возвращает true если строка с цифрами установленного значения length
 * @param {number} length
 * @param {string} str стока из цифр
 * @returns 
 */
export const isValidNumberL = (length, strNum) => {
  if (strNum === undefined) return false;
  if (typeof strNum !== `string`) return false;
  if (
    strNum.replace(/\D/, ``).length !== strNum.length ||
    strNum.replace(/\D/, ``).length !== length
  ) return false;

  return true;
};

export const isValidNumberL7 = (str) => isValidNumberL(7, str);
export const isValidNumberL20 = (str) => isValidNumberL(20, str);

export const isNoValidNumberL7 = (str) => !isValidNumberL(7, str);
export const isNoValidNumberL20 = (str) => !isValidNumberL(20, str);



// Является ли строка ИНН
export const isITN = (ITN) => {
  if (!ITN) return false;
  if (ITN.length !== 10 && ITN.length !== 12) return false;
  if (ITN.replace(/\D/, ``) !== ITN) return false;
  return true;
};
export const isNoITN = (ITN) => !isITN(ITN);


// Проверяем данные на регистрацию пользователя
export const validationSignupData = (data) => {
  let errors = {};
  // Проверка Location // Населённый пункт
  if (isEmpty(data.location)) errors.location = `Поле "Населённый пункт" не должно быть пустым`;

  // Проверка email
  if (isEmpty(data.email)) errors.email = `Поле "Email" не должно быть пустым`;
  if (!isEmail(data.email)) errors.email = `Введён не корректный email`;
  if (!isValidMaxL30(data.email)) errors.email = `Email не должен превышать 30 символов`;

  
  // Проверка firstName
  if (isEmpty(data.firstName)) errors.firstName = `Поле "Имя" не должно быть пустым`;
  if (!isValidMaxL30(data.firstName)) errors.firstName = `Имя не должно превышать 30 символов`;
  // Проверка secondName
  if (!isValidMaxL30(data.secondName)) errors.secondName = `Фамилия не должна превышать 30 символов`;
  // Проверка middleName
  if (!isValidMaxL30(data.middleName)) errors.middleName = `Отчество не должна превышать 30 символов`;

  // Проверка mobileNumber?: string;   // Номер телефона
  if (isEmpty(data.mobileNumber)) errors.mobileNumber = `Поле "Номер телефона" не должно быть пустым`;
  // TODO: проверка валидности номера

  // Проверка пароля
  if (isEmpty(data.password)) errors.password = `Поле "Пароль" не должно быть пустым`;
  if (data.password.length < 6) errors.password = `Пароль должен содержать более 6 символов`;
  if (data.password !== data.confirmPassword) errors.password = `Значение в поле "Подтверждение пароля", не совпадает с введёным паролем`;

  if (!data.permissions) errors.permissions = `Для регистрации, заполните необходимые поля и предоставьте согласие на обработку персональных данных`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};

// Проверяем email для восстановления пароля
export const validationEmailData = (email) => {
  let errors = {};
  // Проверка email
  if (isEmpty(email)) errors.email = `Поле email не должно быть пустым`;
  if (!isEmail(email)) errors.email = `Введён не корректный email`;
  if (!isValidMaxL30(email)) errors.email = `Email не должен превышать 30 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};

// Проверяем данные resUser
export const validationResUserData = (resUser) => { // Test +++
  let errors = {};

  if (isEmpty(resUser.userId)) errors.userId = `Поле userId не должно быть пустым`;
  if (isEmpty(resUser.companyId)) errors.companyId = `Поле companyId не должно быть пустым`;

  if (resUser.userId?.length !== 28) errors.userId = `Поле userId должен содержать 28 символов`;
  if (resUser.companyId?.length !== 20) errors.companyId = `Поле companyId должен содержать 20 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};


// Проверяем отправленный № сертификата
export const validationGetSertificate = data => {
  let errors = {};

  if (!data || isEmpty(data)) errors.sertificate = `Поле № сертификата не должно быть пустым`;
  if (data && data.length !== 5 ) errors.sertificate = `№ сертификата состоит из 5 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};

// Проверяем данные для входа пользователя
export const validationLoginData = (data) => {
  let errors = {};

  // Проверка email
  if (isEmpty(data.email)) errors.email = `Поле email не должно быть пустым`;
  if (!isEmail(data.email)) errors.email = `Введён не корректный email`;

  // Проверка пароля
  if (isEmpty(data.password)) errors.password = `Поле пароль" не должно быть пустым`;
  if (!data.password || data.password.length < 6) errors.password = `Пароль должен содержать более 6 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};



// Валидация для доступа к комментариям
export const validationGetUserComments = (req, taskOwnerId) => {
  let errors = {};

  if (req.user.userId === taskOwnerId) {
    console.log(`Сотрудник, получает доступ к своим комментариям`);

  } else if (req.user.role === Role.SUPER) {
    console.log(`Супервайзер курса, получает доступ к комментариям пользователя`);

  } else if (req.user.userId !== taskOwnerId && req.user.role !== Role.SUPER) {
    console.log(`Сотрудник пытается получить доступ к комментариям другого сотрудника`);
    errors.general = `Извините, у вас недостаточно прав для доступа к комментариям другого человека`;
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
};


// export const reduceUserData = (data) => {
//   let userDetails = {};

//   if (!isEmpty(data.firstName.trim())) userDetails.firstName = data.firstName;
//   if (!isEmpty(data.secondName.trim())) userDetails.secondName = data.secondName;
//   if (!isEmpty(data.middleName.trim())) userDetails.middleName = data.middleName;

//   return userDetails;
// };

// export const reduceCompanyData = (data) => {
//   let companyDetails = {};
//   if (!isEmpty(data.companyName.trim())) companyDetails.companyName = data.companyName;

//   return companyDetails;
// };


// module.exports = {
//   validationLoginData,
//   validationSignupData,
//   validationGetUserComments,
//   validationGetSertificate,
//   validationResUserData,
//   reduceUserData,
//   reduceCompanyData,
//   isEmpty,
// };
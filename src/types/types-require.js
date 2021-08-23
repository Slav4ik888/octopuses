// ДУБЛИКАТ - Типы участника курса
export const UserStatusType = {
  NEW: `Зарегистрировался`,
  CONFIRMED: `Подтвердил регистрацию`,
};

// ДУБЛИКАТ - Роли в приложении
export const Role = {
  SUPER: `Супер админ`,   // Я
  ADMIN: `Администратор`, // Мой помощник
  PARTNER: `Партнёр`,     // Наш франчайзи
  EMPLOYEE: `Сотрудник`,  // Сотрудник франчайзи или наш
  AGENT: `Клиент`, 
};


// Кем является запрашивателем по отношению к запрашиваемым данным
export const RoleRequester = {
  // Запрашиватель является Супервайзером
  Super: `Super`,
  // Запрашиватель НЕ является Супервайзером
  NoSuper: `NoSuper`,
  // Запрашиватель Супервайзер, запрос на доступ к своим данным
  SuperSuper: `SuperSuper`,
  // Запрашиватель Супервайзер, запрос на доступ к данным своего сотрудника
  SuperUser: `SuperUser`,
  // Запрашиватель Супервайзер, запрос на доступ к данным чужого сотрудника
  SuperAnotherUser: `SuperAnotherUser`,
  // Запрашиватель Владелец аккаунта компании, запрос на доступ к своим данным
  OwnerOwner: `OwnerOwner`,
  // Запрашиватель Владелец аккаунта компании, запрос на доступ к данным Пользователя
  OwnerUser: `OwnerUser`,
  // Запрашиватель Владелец, запрос на доступ к данным сотрудника другой компании
  OwnerAnotherUser: `OwnerAnotherUser`,
  // Запрашиватель Пользователь, запрос на доступ к своим данным
  UserUser: `UserUser`,
  // Запрашиватель Пользователь, запрос на доступ к данным другого сотрудника
  UserAnotherUser: `UserAnotherUser`,
};

// Типы операций для валидации
export const VerificationType = {
  IS_SUPER: `Полномочия Супервайзера`,
  GET_USER: `Получить данные пользователя`,
  UPDATE_USER: `Обновление профиля пользователя`,
  DEL_USER: `Удаление пользователя`,
  DEL_COMPANY: `Удаление компании`,

  UPDATE_COMPANY: `Обновление профиля компании`,

  UPDATE_TASK: `Обновление задания`,
};

export const FileOperationType = {
  ANSWER_TASK: `answer_task`,
  PROFILE: `profile`,
  PAYMENT: `payment`,
};

export const ResultType = {
  SUCCESS: `success`,
  ERROR: `error`,
  WARNING: `warning`,
};

// Типы того, кто открыл профиль, чтобы понять какие ещё действия нужно делать при сохранении
// export const typeWhoInProfile = {
//   USER: `USER`,
//   OWNER: `OWNER`,
//   SUPER: `SUPER`,
// };


// Типы для логгирования
export const typeLog = {
  AUTH: `Регистрация, подтверждения регистрации, авторизации`,
  INVOIE: `Выписка счёта, оплата`,
  BUG: `Ошибки`,
};


// Типы для результата ответа на вопрос
// last typeResAnswer
export const AnswerResultType = {
  NO_CHECK: `Не выбран`,
  RIGHT: `Верно`,
  WRONG: `Не верно`,
};

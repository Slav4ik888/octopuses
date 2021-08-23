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


// ДУБЛИКАТ - Типы для подписки
export const SubscribeType = {
  NO_SUB: `Не оформлена`,
  SUB: `Оформлена`,
  DEMO: `Демо-доступ`,
  // ACTIVE: `Действующая`,
  // DEACTIVE: `Завершена`,
};


// ДУБЛИКАТ - Типы для заданий task
export const TaskType = {
  SIMPLE: `Простое`,
  CHECKLIST: `Чек-лист`,
};
// ДУБЛИКАТ - 
export const AnswerType = {
  INPUT: `input`,
  INPUT_DP: `input_dp`, // Индив. вопрос ДП
  INPUT_KL: `input_kl`, // Индив. вопрос КЛ
  TEXTAREA: `textarea`,
  CHECKLIST: `checklist`,
  FILE_UPLOAD: `file_upload`,
};

// // Тип для TaskStatusBtn понять для кого рисовать: TasksListPanel, TaskContainer или UserProgressItem
// export const typeTaskBtn = {
//   PANEL: `PANEL`,
//   TASK: `TASK`,
//   TASK_ACTION: `TASK_ACTION`,
//   PROGRESS: `PROGRESS`,
// };

// Константы для статусов заданий task.status
export const TaskStatusConst = {
  NONE: {
    status: `NONE`,
    title: `Не начато`,
    tooltip: ``,
    taskColor: `#e1efe3`,
    taskBg: `#bad4c3`,
    tActionBorder: `#989898`,
    panelColor: `#e1efe3`,
    progressColor: `#25672e`,
    progressBg: `#bad4c3`,
    progressBorder: `#989898`,
    notifyColor: `#25672e`,
    notifyBg: `#bad4c3`,
    notifyBorder: `#25672e`,
  },
  PERFORMED: {
    status: `PERFORMED`,
    title: `Выполняется`,
    tooltip: ``,
    taskColor: `#009914`,
    taskBg: `#cce6d4`,
    tActionBorder: `#e4b155`,
    panelColor: `#009914`,
    progressColor: `#fffadf`,
    progressBg: `#e4b155`,
    progressBorder: `#e4b155`,
    notifyColor: `#116520`,
    notifyBg: `#bad4c3`,
    notifyBorder: `#116520`,
  },
  ON_CHECK: {
    status: `ON_CHECK`,
    title: `На проверке`,
    tooltip: `Задание находится на проверке у Супервайзера, как только он проверит ваш ответ, вам придёт уведомление`,
    taskColor: `#8a7a00`,
    taskBg: `#fdff9d`,
    tActionBorder: `#e6e874`,
    panelColor: `#faff27`,
    progressColor: `#545600`,
    progressBg: `#e6e874`,
    progressBorder: `#e6e874`,
    notifyColor: `#9c9e24`,
    notifyBg: `#feffd7`,
    notifyBorder: `#9c9e24`,
  },
  NEED_ADJUSTED: {
    status: `NEED_ADJUSTED`,
    title: `На доработке`,
    tooltip: `Супервайзер написал вам комментарий, что необходимо скорректировать`,
    taskColor: `#397bf7`,
    taskBg: `#b2e6ff`,
    tActionBorder: `#03a2ee`,
    panelColor: `#397bf7`,
    progressColor: `#397bf7`,
    progressBg: `#b2e6ff`,
    progressBorder: `#b2e6ff`,
    notifyColor: `#397bf7`,
    notifyBg: `#b2e6ff`,
    notifyBorder: `#397bf7`,
  },
  SO_SO: {
    status: `SO_SO`,
    title: `Принято`,
    tooltip: `Зачёт, но есть рекомендации оставленные на усмотрение обучающегося`,
    taskColor: `#e1efe3`,
    taskBg: `#70af50`,
    tActionBorder: `#70af50`,
    panelColor: `#70af50`,
    progressColor: `#fff`,
    progressBg: `#70af50`,
    progressBorder: `#70af50`,
    notifyColor: `#fff`,
    notifyBg: `#70af50`,
    notifyBorder: `#135f12`,
  },
  DONE: {
    status: `DONE`,
    title: `Отлично!`, // Зачёт
    tooltip: ``,
    taskColor: `#e1efe3`,
    taskBg: `#009914`,
    tActionBorder: `#03a017`,
    panelColor: `#588267`,
    progressColor: `#fff`,
    progressBg: `#009914`,
    progressBorder: `#009914`,
    notifyColor: `#003e0b`,
    notifyBg: `#009914`,
    notifyBorder: `#003e0b`,
  },
  ARCHIVE: {
    status: `ARCHIVE`,
    title: `В архиве`, // Задания которые не будут загружаться, для тех кто уже не на курсе
    tooltip: ``,
    taskColor: `#e1efe3`,
    taskBg: `#a7b1a8`,
    tActionBorder: `#333`,
    panelColor: `#a7b1a8`,
    progressColor: `#a7b1a8`,
    progressBg: `#eee`,
    progressBorder: `#333`,
    notifyColor: `#a7b1a8`,
    notifyBg: `#eee`,
    notifyBorder: `#a7b1a8`,
  },
};

/**
 * Возвращает массив объектов с полем status из obj
 * [{status: `Выполняется`}, {status: `На проверке`} ...]
 * @param {Object} obj - role || typeListSelect || TaskStatusConst
 * @return {Array} массив из объектов 
 */
export const typeTaskStatusArr = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push({ status: obj[key].title });
    }
  }
  return arr;
};


// Типы для результата ответа на вопрос
// last typeResAnswer
export const AnswerResultType = {
  NO_CHECK: `Не выбран`,
  RIGHT: `Верно`,
  WRONG: `Не верно`,
};

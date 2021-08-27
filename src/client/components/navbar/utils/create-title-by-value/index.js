export const createTitleByValue = (type, value) => {
  const title = {
    comments: {
      0: `У вас нет непрочитанных комментариев`,
      1: `Есть непрочитанный комментарий`,
      2: `Есть непрочитанные комментарии`
    },
    notifications: {
      0: `Новых уведомлений нет`,
      1: `Есть новое уведомление`,
      2: `Есть новые уведомления`
    }
  };
  if (value > 1) return title[type][2];
  if (value === 1) return title[type][1];
  return title[type][0];
}
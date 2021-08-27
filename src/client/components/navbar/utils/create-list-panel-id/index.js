// Создаём id для контейнера с заданиями, для того, чтобы можно было перекручивать страницу к нему
export const createListPanelId = (obj, type) => {
  const userId = type === `comment` ? obj.taskOwnerId : obj.userId;
  return `P` + userId + obj.taskId;
};
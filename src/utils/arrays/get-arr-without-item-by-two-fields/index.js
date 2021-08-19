/**
 * Возвращает массив без указанного элемента по itemField
 * @param {array} items 
 * @param {string} fieldOne - `taskId`
 * @param {string} fieldTwo - `userId`
 * @param {obj} delItem 
 * test +
 */
export const getArrWithoutItemByTwoFields = (items, fieldOne, fieldTwo, delItem) => {
  const idx = items.findIndex((item) => item[fieldOne] === delItem[fieldOne]
    && item[fieldTwo] === delItem[fieldTwo]);

  let newItems = [...items];
  if (idx !== -1) {
    newItems = [...newItems.slice(0, idx), ...newItems.slice(idx + 1)];
  }

  return newItems;
};
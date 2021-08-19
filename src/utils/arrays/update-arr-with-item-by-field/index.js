import { updateObject } from '../../objects/update-object/update-object.js';


/**
 * Возвращает массив с обновлённым item
 * test +
 * 
 * Если нет массива items, то создаёт его
 * 
 * @param {array} items 
 * @param {string} field - поле по которому ищется объект: `id` || `email` || any
 * @param {object} updateItem 
 * @param {string | array} flags - если стоит `update`, то в обновляемом объекте, обновляются только 
 * те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
 * @return {array} items 
 */
export const updateArrWithItemByField = (items, field, updateItem, flags) => {
  let newItems = [];

  // Если нет массива items, то создаём его
  if (!items) { 
    newItems.push(updateItem);
    return newItems;
  }

  const idx = items.findIndex((item) => item[field] === updateItem[field]);
  newItems = [...items];

  // Если есть - обновляем
  if (idx !== -1) { 

    // Если указан флаг, обрабатываем
    if (flags?.includes(`update`)) {
      updateItem = updateObject(items[idx], updateItem);
    }

    newItems = [...newItems.slice(0, idx), updateItem, ...newItems.slice(idx + 1)];
  
  } else { // Нету - добавляем
    newItems.push(updateItem);
  }

  return newItems;
};
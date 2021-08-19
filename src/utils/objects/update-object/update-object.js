import { cloneObj } from '../objects.js';

// Возвращает новый объект lastObj с обновлёнными полями из updateItem
export const updateObject = (lastObj, updateItem) => {
  let newObj = cloneObj(lastObj);

  for (let key in updateItem) {
    if (Object.prototype.hasOwnProperty.call(updateItem, key)) {
      newObj[key] = updateItem[key];
    }
  };

  return newObj;
};
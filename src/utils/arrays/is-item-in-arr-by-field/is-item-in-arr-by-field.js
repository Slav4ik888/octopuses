import { getItemFromArrByField } from '../get-item-from-arr-by-field/get-item-from-arr-by-field.js';


/**
 * Возвращает есть ли элемент itemField со значением value
 * @param {array} items 
 * @param {string} itemField 
 * @param {string || number} value 
 * 
 * @return {Boolean} 
 */
export const isItemInArrByField = (items, itemField, value) => {
  const result = getItemFromArrByField(items, itemField, value);
  return Boolean(result);
};
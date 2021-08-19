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
export function updateArrWithItemByField<T>(
  items: Array<T>,
  field: string,
  updateItem: T,
  flags?: string | Array<string>,
): Array<T>;

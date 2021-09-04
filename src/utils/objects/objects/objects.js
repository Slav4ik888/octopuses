
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};


// Возвращает клон объекта
export const cloneObj = obj => {
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
};


/**
 * Возвращает массив значений из obj
 * @param {object} obj - { admin: 'Admin', ....
 * @return {Array}  ['Admin', ...]
 */
export const arrFromObj = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
};


/**
 * Возвращает массив объектов с полем [field] из obj
 * [{status: `Выполняется`}, {status: `На проверке`} ...]
 * @param {Object} obj - role || typeListSelect || TaskStatusConst
 * @param {String} field `status`, `currentStatus
 * @return {Array} массив из объектов 
 */
export const arrFromObjByObj = (obj, field) => {
  let arr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push({ [field]: obj[key] });
    }
  }
  return arr;
};

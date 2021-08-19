import { cloneObj } from '../objects.js';

export const getObjectWithoutField = (obj, field) => {
  if (!obj) return {};
  let newObj = cloneObj(obj);

  for (let key in newObj) {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      if (key === field) delete newObj[key];
    }
  }

  return newObj;
}
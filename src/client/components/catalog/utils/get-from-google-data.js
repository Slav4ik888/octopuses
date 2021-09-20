import api from '../../../redux/api.js';

/**
 * ПОЛУЧАЕМ ДАННЫЕ С ГУГЛ ТАБЛИЦЫ
 * 
 * @param {string} url адрес на гугл таблицу
 * @return {array} arr  
 */

export async function getFromGoogleData(url) {
  const response = await api.get(url);
  return response.data;
};
// export const getFromGoogleData = (url) => {
//   return fetch(url)
//     .then(response => response.json())
//     .then(res => res);
// };


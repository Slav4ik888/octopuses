import axios from 'axios';

/**
 * ПОЛУЧАЕМ ДАННЫЕ С ГУГЛ ТАБЛИЦЫ
 * 
 * @param {string} url адрес на гугл таблицу
 * @return {array} arr  
 */

export async function getFromGoogleData(url) {
  const response = await axios.get(url);
  return response.data;
};


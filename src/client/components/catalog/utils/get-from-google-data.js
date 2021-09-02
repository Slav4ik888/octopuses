import axios from 'axios';

/**
 * ПОЛУЧАЕМ ДАННЫЕ С ГУГЛ ТАБЛИЦЫ
 * 
 * @param {string} url адрес на гугл таблицу
 * @return {array} arr  
 */

export const getFromGoogleData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};


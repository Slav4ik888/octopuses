

// Находим и сохраняем индексы интересующих нас полей
const getIndexes = (arr) => {
  let indexes = {};

  arr.forEach(item => indexes[item] = arr.findIndex(it => it === item));
  return indexes;
};


const getImage = (item, ids, i) => ({
  id:     item[ids[`img_id${i}`]],    // Image Id
  label:  item[ids[`img_label${i}`]], // Название картинки
  url_sm: item[ids[`url_sm${i}`]],    // Ссылка на картинку (лёгкая)
  url:    item[ids[`url${i}`]],       // Ссылка на картинку
  order:  100,
});
  

/**
 * Возвращает все картинки по товару
 * 
 * @param {*} item 
 * @param {object} ids { 'id': 2, 'label': 4 ...}
 */
const getImages = (item, ids) => {
  let images = [];
  
  for (let i = 1; i <= 3; i++) {
    if (item[ids[`img_id${i}`]]) {
      images.push(getImage(item, ids, i))
    }
  }
  return images;
};




/**
 * Возвращает заполненную карточку по товару
 * 
 * @param {*} item 
 * @param {object} ids { 'id': 2, 'label': 4 ...}
 */
const createOneGoods = (item, ids) => ({
  id:             item[ids.id],             // Id товара
  label:          item[ids.label],          // Наименование товара
  description:    item[ids.description],    // Описание товара
  article:        item[ids.article],        // Артикул товара
  rest:           item[ids.rest],           // Остаток на складе
  images:         getImages(item, ids),     // Картинки товара
  variety:        item[ids.variety],        // Разновидность товара
  types:          item[ids.types],          // Types of goods to which the goods belon
  price:          item[ids.price],          // Цена без скидки
  size:           item[ids.size],           // Размер
  discount:       item[ids.discount],       // Скидка в %
  discountPrice:  item[ids.discountPrice],  // Цена со скидкой
  arriveExpected: item[ids.arriveExpected], // Ожидается поступление (дата)
});


import logger from '../../../../utils/client-logger/client-logger.js';
const log = logger(`adapterGoogleData`);


// Адаптирует данные полученные с Гугл таблицы, 
// под тот формат, что будет использоваться для каталога
export const adapterGoogleData = (data) => {
  if (!data) return;
  let goods = [];

  // Находим и сохраняем индексы имеющихся полей
  const indexes = getIndexes(data[0]);

  // Пропускаем 2 строки и с оставшихся строк создаём массив товаров
  for (let i = 2; i < data.length; i++) goods.push(createOneGoods(data[i], indexes))
  log('goods: ', goods);

  return goods;
};
// Возвращает путь к картинкам
export const getImagePath = () => `./src/img/`;


// Возвращает путь к картинкам товаров
export const getGoodsPath = (imgFileName: string) => {
  return getImagePath() + `goods/${imgFileName}`;
};
// Разновидность товара
export enum GoodsVariety {
  GOODS = `Товары`,
  INSOLES = `Стельки`,
};


// Для кого
export enum GoodsType {
  ALL = `Все`,
  MAN = `Мужские`,
  WOMAN = `Женские`,
  KIDS = `Детские`,
  ANY = `Универсальные`,
};


export interface GoodsImage {
  id: string,        // Image Id
  label?: string,    // Название картинки
  url_sm: string,    // Ссылка на картинку (лёгкая)
  url: string,       // Ссылка на картинку
  order: number,     // Сортировка
};


export interface Goods {
  id: string,                  // Id товара
  label: string,               // Наименование товара
  description: string,         // Описание товара
  article: string,             // Артикул товара
  rest: number,                // Остаток на складе
  images: Array<GoodsImage>,   // Картинки товара
  variety: GoodsVariety,       // Разновидность товара
  types: GoodsType,     // Types of goods to which the goods belon
  price: number,               // Цена без скидки
  discount: number,            // Скидка в %
  discountPrice: number,       // Цена со скидкой
  arriveExpected: string,      // Ожидается поступление (дата)
};
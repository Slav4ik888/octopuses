/**
 * Выводит в консоль сообщение
 * @param {string} tag
 */
export default function logger(tag) {

  return function (message, ...args) {
    if (process.env.NODE_ENV === `development`) {
      let str = `[${tag}] ${message}`;
      console.log(str, args);
    }
    return;
  }
};
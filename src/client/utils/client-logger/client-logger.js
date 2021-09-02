/**
 * Выводит в консоль сообщение
 * @param {string} tag
 */
export default function logger(tag) {

  return function (message, value, ...args) {
    if (process.env.NODE_ENV === `development`) {
      let str = `[${tag}] ${message}`;
      
      if (args.length) console.log(str, value, args);
      else console.log(str, value);
    }
    return;
  }
};
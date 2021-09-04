/**
 * Возвращает строку с разделением тысяч пробелом
 * @param {Number} number
 * @return {String}
 */
export default function addSpaceBetweenNumber(number) {
  // Перевести в строку
  let newNumber = String(number);

  let beforeDot = newNumber;
  let afterDot = ``;

  // Разрезаем до и после знака
  if (newNumber.includes(`.`)) {
    beforeDot = newNumber.slice(0, newNumber.indexOf(`.`));
    afterDot = newNumber.slice(newNumber.indexOf(`.`));
  }

  // Добавляем пробелы
  let result = ``;
  let newResult = ``;

  if (beforeDot.length > 2) {
    let num = 0; // Чтобы отсчитывать по 3 числа
    for (let i = beforeDot.length - 1; i > -1; i--) {
      num++;
      // if (result.length/3 === Math.floor(result.length/3) && (result.length > 0)) {
      if (num / 4 === Math.floor(num / 4) && (num > 0)) {
        num = 0;
        result += ` `;
        i++;
      }
      else {
        result += beforeDot[i];
      }
    }
    // Переводим в обратную сторону
    for (let i = result.length - 1; i > -1; i--) {
      newResult += result[i];
    }
    beforeDot = newResult;
  }

  return beforeDot + afterDot
};
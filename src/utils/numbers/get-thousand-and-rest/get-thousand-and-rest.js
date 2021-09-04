/**
 * Возвращает целые тысячи и остаток по отдельности
 * @param {*} value 
 * @returns { thousand, rest }
 */
export const getThousandAndRest = (value) => {

  const thousand = Math.floor(value / 1000);
  const rest = ((value - thousand * 1000) + "00").slice(0, 3);

  return { thousand, rest };
};
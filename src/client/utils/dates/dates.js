/**
 * Возвращает дату в виде миллисекунд
 * @param {String} date дата
 */
export const getMsFromDate = (date) => new Date(date).getTime();


/**
 * Возвращаем дату от timestamp в нужном формате
 * 
 * @param {Number} timestamp - таймстамп
 * @param {String} format - формат, в котором нужно вернуть timestamp
 * @param {Boolean} rus - если нужно в на русском
 * @param {Boolean} sklonenie - если нужно склонение `Февраля`
 * @return {String} - дата в нужном формате
 */
export const showDate = (timestamp, format, rus = false, sklonenie = false) => {

  const newDate = new Date(timestamp);
  const monthName = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
  const monthNameRus = [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`];
  const monthNameRusSklon = [`Января`, `Февраля`, `Марта`, `Апреля`, `Мая`, `Июня`, `Июля`, `Августа`, `Сентября`, `Октября`, `Ноября`, `Декабря`];

  let month = null;
  let day = null;
  let hours = null;
  let mins = null;

  const formatType = {
    month: `Month`,
    monthYYYY: `Month YYYY`,
    monthDDсYYYY: `Month DD, YYYY`,
    DDmonthYYYY: `DD Month YYYY`,
    DmonthYYYY: `D Month YYYY`,
    DmonthYYYYHHMM: `D Month YYYY HH:MM`,
    yyyymmddT: `YYYY-MM-DD`,
    yyyymmddE: `YYYYMMDD`,
    ddmmyyyy: `DD-MM-YYYY`,
    ddmmyyyyDot: `DD.MM.YYYY`,
    HHMM: `HH:MM`,
  };

  switch (format) {
    case formatType.month:
      return rus ? `${monthNameRus[newDate.getMonth()]}`
        : `${monthName[newDate.getMonth()]}`;

    case formatType.monthYYYY:
      return rus ? `${monthNameRus[newDate.getMonth()]} ${newDate.getFullYear()}`
        : `${monthName[newDate.getMonth()]} ${newDate.getFullYear()}`;

    case formatType.monthDDсYYYY:
      day = (`0` + newDate.getDate()).slice(-2);
      return rus ? `${monthNameRus[newDate.getMonth()]} ${day}, ${newDate.getFullYear()}`
        : `${monthName[newDate.getMonth()]} ${day}, ${newDate.getFullYear()}`;

    case formatType.DDmonthYYYY:
      day = (`0` + newDate.getDate()).slice(-2);
      return rus ? `${day} ${monthNameRus[newDate.getMonth()]} ${newDate.getFullYear()}`
        : `${day} ${monthName[newDate.getMonth()]} ${newDate.getFullYear()}`;

    case formatType.DmonthYYYY:
      if (rus) {
        if (sklonenie) {
          return `${newDate.getDate()} ${monthNameRusSklon[newDate.getMonth()]} ${newDate.getFullYear()}`;
        } else {
          return `${newDate.getDate()} ${monthNameRus[newDate.getMonth()]} ${newDate.getFullYear()}`;
        }
      } else {
        return `${day} ${monthName[newDate.getMonth()]} ${newDate.getFullYear()}`;
      }

    case formatType.DmonthYYYYHHMM:
      if (rus) {
        if (sklonenie) {
          return `${newDate.getDate()} ${monthNameRusSklon[newDate.getMonth()]} ${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
        } else {
          return `${newDate.getDate()} ${monthNameRus[newDate.getMonth()]} ${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
        }
      } else {
        return `${day} ${monthName[newDate.getMonth()]} ${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
      }

    case formatType.yyyymmddT:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${newDate.getFullYear()}-${month}-${day}`;

    case formatType.yyyymmddE:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${newDate.getFullYear()}${month}${day}`;

    case formatType.ddmmyyyy:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${day}-${month}-${newDate.getFullYear()}`;
    
    case formatType.ddmmyyyyDot:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${day}.${month}.${newDate.getFullYear()}`;
    
    case formatType.HHMM:
      hours = (`0` + (newDate.getHours())).slice(-2);
      mins = (`0` + newDate.getMinutes()).slice(-2);
      return `${hours}:${mins}`;

    default:
      return timestamp;
  }
};


/**
 * Возвращает день недель в нужном формате
 * @param {Number} timestamp - таймстамп
 * @param {String} format - формат, в котором нужно вернуть timestamp
 *
 * @return {String} - день недели в нужном формате
 */
export const getWeekDay = (timestamp, format) => {
  const newDate = new Date(timestamp);

  const weekDays = [`ВС`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`];
  const weekDaysLarge = [`Воскресенье`, `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`];
  const weekDayStandart = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`];

  const formatType = {
    smallEng: `smallEng`,
    smallRus: `smallRus`,
    largeRus: `largeRus`,
  };

  switch (format) {
    case formatType.smallEng:
      return weekDayStandart[newDate.getDay()];

    case formatType.smallRus:
      return weekDays[newDate.getDay()];

    case formatType.largeRus:
      return weekDaysLarge[newDate.getDay()];

    default: return timestamp;
  }
};

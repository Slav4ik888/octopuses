// Functions
import { getMsFromDate } from '../../../utils/dates/dates.js';
// Consts
import { MAX_FREQUENCY_FROM_GOOGLE } from '../../../../consts/consts.js';


export const isMaxFrequencyEnd = (lastTime) => {
  const lastTimeMs = getMsFromDate(lastTime);
  const currentTimeMs = getMsFromDate(new Date());

  return MAX_FREQUENCY_FROM_GOOGLE < currentTimeMs - lastTimeMs;
};
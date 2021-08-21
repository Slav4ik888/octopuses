import { admin, db } from '../firebase/admin.js';
import { auth } from '../firebase/fire.js';
// FILES METHODS
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getPathPolicy } from '../utils/paths/index.js';

import { loggerUI } from '../loggers/index.js';



// Отправка "Политики конфиденциальности"
export async function getPolicy(ctx, next) {
  try {
    loggerUI.info(`[getPolicy] - start`);
    const policy = fs.readFileSync(getPathPolicy(), "utf8");
    ctx.status = 200;
    ctx.body = { policy };
    loggerUI.info(`[getPolicy] - successfully!`);
  }
  catch (err) {
    loggerUI.error(`[getPolicy] - ${err}`);
    ctx.status = 500;
    ctx.body = { general: `Что-то пошло не так. Мы уже отправили разработчику отчёт об этом... Вскоре, всё починят......` };
  }
}
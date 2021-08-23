import juice from 'juice';
import mailer from './config.js';
import { join } from 'path';
import { renderFile } from 'pug';

import { createTransport } from 'nodemailer';
import { htmlToText } from 'nodemailer-html-to-text';
import SMTPTransport from 'nodemailer-smtp-transport';
import StubTransport from 'nodemailer-stub-transport';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const transportEngine = process.env.NODE_ENV === 'test' ?
  new StubTransport() :
  new SMTPTransport({
    // host: 'smtp.yandex.ru',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: mailer.user,
      pass: mailer.password,
    },
  });

const transport = createTransport(transportEngine);

transport.use('compile', htmlToText());

/*
* sendMail - функция, отправляющая письмо на указанный адрес
* options - объект, содержащий опции для отправки писем:
* options.template - имя файла, содержащего шаблон письма
* options.locals - объект с переменными, которые будут переданы в шаблон
* options.to - email, на который будет отправлено письмо
* options.subject - тема письма
* пример:
*     await sendMail({
*       template: 'confirmation',
*       locals: {token: 'token'},
*       to: 'user@mail.com',
*       subject: 'Подтвердите почту',
*     });
* */
export default async function sendMail(options) {
  const html = renderFile(
      join(__dirname, './templates', options.template) + '.pug',
      options.locals || {},
  );

  const message = {
    html: juice(html),
    to: {
      address: options.to,
    },
    subject: options.subject,
  };

  return await transport.sendMail(message);
};

const _transportEngine = transportEngine;
export { _transportEngine as transportEngine };

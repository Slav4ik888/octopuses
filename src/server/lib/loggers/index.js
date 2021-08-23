import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import winston from 'winston';
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const loggerServer = createLogger({
  level: 'info',
  // format: winston.format.json(),
  format: combine(
    // format.json(),
    label({ label: 'server' }),
    timestamp(),
    myFormat
  ),
  // defaultMeta: {service: 'course-service'},
  transports: [
    // сюда будут попадать ошибки уровня error
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    // Сюда будет валиться всё
    new transports.File({filename: `${__dirname}/../logs/server.log`}),
  ],
});


const loggerAuth = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'auth' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/auth.log`}),
  ],
});


const loggerUser = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'user' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/users.log`}),
  ],
});

const loggerUI = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'ui' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/ui.log`}),
  ],
});

const loggerChapters = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'chapters' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/chapters.log`}),
  ],
});

const loggerTasks = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'tasks' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/tasks.log`}),
  ],
});

const loggerMail = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'mailer' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/mails.log`}),
  ],
});

const loggerFiles = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'files' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/files.log`}),
  ],
});

const loggerUpload = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'upload' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/upload.log`}),
  ],
});

const loggerPdf = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'pdf' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/../logs/error.log`, level: 'error' }),
    new transports.File({filename: `${__dirname}/../logs/pdf.log`}),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  loggerServer  .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerAuth    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerUser    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerUI .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerChapters.add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerTasks   .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerMail    .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerUpload  .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerFiles   .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
  loggerPdf     .add(new transports.Console({ format: combine(format.colorize(),format.simple()) }));
}

export {
  loggerServer, loggerAuth, loggerUser, loggerUI, loggerChapters, loggerMail,
  loggerTasks, loggerFiles, loggerUpload, loggerPdf
};

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// "Политика конфиденциальности"
export const getPathPolicy = () => path.join(__dirname, '../../downloads/documents/policy.md');


/**
 * Возвращает путь к месту хранения в Storage
 * 
 * @param {string} userId 
 * @param {FileOperationType} operation - тип операции сохранения файла: payment | profile | answer_task
 * @param {string} uploadedFileName - имя загружаемого файла в storage
 * @returns {string}
 */
export const getPathDestionation = (userId, operation, uploadedFileName) => `${userId}/${operation}/${uploadedFileName}`;

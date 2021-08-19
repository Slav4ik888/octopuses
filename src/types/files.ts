import { MimeType } from './types';

import { MAX_FILE_SIZE_UPLOAD, MAX_FILES_SIZE_UPLOAD } from '../utils/consts.js';
export { MAX_FILE_SIZE_UPLOAD, MAX_FILES_SIZE_UPLOAD };

// Тип данных по загруженному файлу, например в answer
export type FileType = {
  name: string;
  url: string;
  mimetype: MimeType;
  // data: Buffer;
  // size: number;
  // encoding: string;
};

export type FileData = {
  size: number;
  name: string;
};

export enum FileOperationType {
  ANSWER_TASK = `answer_task`,
  PROFILE = `profile`,
  PAYMENT = `payment`,
};
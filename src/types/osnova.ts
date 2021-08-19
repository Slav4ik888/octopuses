
// Type of LegalDocument
export enum TypeLegalDocument {
  FB_URL = `Ref from Firebase`,
  COURSE_URL = `Ref from course`,
};


// Юридические документы для просмотра
export interface LegalDocument {
  type: TypeLegalDocument; // Ref from course | Ref from Firebase
  label: string;           // Заголовок
  description?: string;    // Описание
  prevUrl: string;         // Ссылка на preview файл in Storage
  url: string;             // Ссылка на main файл in Storage
};
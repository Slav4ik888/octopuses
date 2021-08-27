
// Типы для MessageBar
export enum MessageType {
  SUCCESS = `success`,
  INFO = `info`,
  WARNING = `warning`,
  ERROR = `error`,
};

export interface Message {
  type: MessageType;
  message: string;
  timeout?: number;
};


// Комментарий
export interface Comment {
  id: string;
  // taskId: string;
  // taskOwnerId: string;
  // taskOwnerCompanyId: string;
  message: string;
  createdAt: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  readed: boolean;
};

export interface NewComment {
  message: string;
  // taskId: string;
  // taskOwnerId: string;
  // taskOwnerCompanyId: string;
};

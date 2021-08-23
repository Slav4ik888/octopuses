import { Role, UserStatusType } from '../../types/types-require.js';

export default {
  userId: ``,
  displayName: ``,
  avatarUrl: `no-img-user.svg`,

  location: ``,
  fio: {
    firstName: ``,
    secondName: ``,
    middleName: ``,
  },
  
  email: ``,
  mobileNumber: ``,
  permissions: false,

  role: Role.AGENT,            // По умолчанию регистрируем Клиента

  emailVerified: false,
  status: UserStatusType.NEW,
  
  createdAt: ``,
  lastChange: ``,
};

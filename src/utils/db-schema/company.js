import { SubscribeType, UserStatusType } from '../../types/types-require.js';

export default {
  companyName: ``,
  companyId: ``,
  ownerId: ``,
  owner: ``,
  subscribes: {
    subscribe: {
      currentStatus: SubscribeType.NO_SUB,
      subStart: ``,
      subEnd: ``,
      paymentAmount: 0,
      paymentDay: ``,
      comment: ``,
    },
    archive: [],
  },
  logoUrl: `https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media&token=9bc99c4d-da9e-4568-b093-0bb5c5fa06ae`,
  status: UserStatusType.NEW,
  

  invoices: [],
  payers: {
    selected: 0,
    payers: [],
  },
  payments: [],

  permissions: false,
  createdAt: ``,
  lastChange: ``,
};

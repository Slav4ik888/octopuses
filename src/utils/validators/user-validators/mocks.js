import { Role } from '../../../types/types-require';

export default {
  Owner: {
    role: Role.OWNER,
    userId: `asdlkj`
  },
  User: {
    role: Role.USER,
    userId: `asdlkj`
  },
  Super: {
    role: Role.SUPER,
    userId: `asdlkj`
  },
  reqThisUser: {
    role: Role.OWNER,
  },
  RightUserId: `asdlkj`,

  reqNoThisUser: {
    userId: `sdlkjh`
  },
  WrongUserId: `sdlkjh`,
  OwnerId: `asdlkj`,
  AdminId: `adminheyasdlkj`,
  SuperId: `superheyasdlkj`,
  
  NoOwner: {
    role: Role.USER,
    userId: `heyasdlkj`,
  },
  NoOwnerAdmin: {
    role: Role.ADMIN,
    userId: `adminheyasdlkj`,
  },
  NoOwnerSuper: {
    role: Role.SUPER,
    userId: `superheyasdlkj`,
  },

};
export const mValidationResUserData = {
  resUserRight: {
    userId: 'HJUIpL1nSPhQ18FyLdrdFpdm62p2',
    companyId: 'eZ0t5Zr9rk0FdW55mfvZ',
  },
  resUserWrongUserId1: {
    userId: 'JUIpL1nSPhQ18FyLdrdFpdm62p2',
    companyId: 'eZ0t5Zr9rk0FdW55mfvZ',
  },
  resUserWrongUserId2: {
    userId: 'JUIpL1n2SPhQ18FyLdrdFpdm62p2dd',
    companyId: 'eZ0t5Zr9rk0FdW55mfvZ',
  },
  resUserWrongCompanyId1: {
    userId: 'HJUIpL1nSPhQ18FyLdrdFpdm62p2',
    companyId: 'Z0t5Zr9rk0FdW5mfvZ',
  },
  resUserWrongCompanyId2: {
    userId: 'HJUIpL1nSPhQ18FyLdrdFpdm62p2',
    companyId: 'Z0t5Zr9rk0FldsklksjddW5mfvZ',
  },
};

export const mIsValidLength = [
  {
    maxLength: 20,
    describe: `строка больше 20 символов`,
    str: `строка больше 20 символов`,
    result: false
  }, {
    maxLength: 20,
    describe: `---- строка равна 20`,
    str: `---- строка равна 20`,
    result: true
  }, {
    maxLength: 20,
    describe: `- строка меньше 20`,
    str: `- строка меньше 20`,
    result: true
  }, {
    maxLength: 20,
    describe: `пустая строка`,
    str: ``,
    result: true
  }, {
    maxLength: 20,
    describe: `НЕ строка`,
    str: 2123,
    result: false
  }, {
    maxLength: 20,
    describe: `str = undefined`,
    str: undefined,
    result: false
  },

];

export const mockINT = [
  {
    CASE: `0123456789`,
    RESULT: true,
  }, {
    CASE: `012345678912`,
    RESULT: true,
  }, {
    CASE: `012345 678912`,
    RESULT: false,
  }, {
    CASE: `012345678`,
    RESULT: false,
  }, {
    CASE: `0123456789123`,
    RESULT: false,
  }, {
    CASE: ``,
    RESULT: false,
  }, {
    CASE: undefined,
    RESULT: false,
  }, {
    CASE: `012345678A`,
    RESULT: false,
  }
];

export const mockValidNumberL = [
  {
    CASE: `12345678`,
    LENGTH: 8,
    RESULT: true,
  }, {
    CASE: `1234 5678`,
    LENGTH: 8,
    RESULT: false,
  }, {
    CASE: `1234567`,
    LENGTH: 8,
    RESULT: false,
  }, {
    CASE: `123456789`,
    LENGTH: 8,
    RESULT: false,
  }, {
    CASE: ``,
    LENGTH: 8,
    RESULT: false,
  }, {
    CASE: null,
    LENGTH: 8,
    RESULT: false,
  }, {
    CASE: `1F345678`,
    LENGTH: 8,
    RESULT: false,
  },
];
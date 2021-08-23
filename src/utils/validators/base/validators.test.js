import { validationResUserData, isValidMaxL, isITN, isValidNumberL } from './validators';
import { mValidationResUserData as mVRUD } from './mocks';
import { mIsValidLength as mIVL } from './mocks';
import { mockINT, mockValidNumberL } from './mocks';


describe(`VALIDATORS - validationResUserData`, () => {
  it(`validationResUserData - resUserRight`, () => {
    expect(validationResUserData(mVRUD.resUserRight).valid).toBe(true);
  });
  it(`validationResUserData - wrongUserId <`, () => {
    expect(validationResUserData(mVRUD.resUserWrongUserId1).valid).toBe(false);
  });
  it(`validationResUserData - wrongUserId >`, () => {
    expect(validationResUserData(mVRUD.resUserWrongUserId2).valid).toBe(false);
  });
  it(`validationResUserData - wrongCompanyId <`, () => {
    expect(validationResUserData(mVRUD.resUserWrongCompanyId1).valid).toBe(false);
  });
  it(`validationResUserData - wrongCompanyId >`, () => {
    expect(validationResUserData(mVRUD.resUserWrongCompanyId2).valid).toBe(false);
  });
});


describe(`VALIDATORS - isValidMaxL`, () => {
  mIVL.forEach((m) => {
    it(`isValidMaxL - ${m.describe}`, () => {
      expect(isValidMaxL(m.maxLength, m.str)).toEqual(m.result);
    });
  })
});


describe(`VALIDATORS - isITN`, () => {
  mockINT.forEach((m) => {
    it(`isITN - ${m.CASE}`, () => {
      expect(isITN(m.CASE)).toEqual(m.RESULT);
    });
  })
});


describe(`VALIDATORS - isValidNumberL`, () => {
  mockValidNumberL.forEach((m) => {
    it(`isValidNumberL - ${m.CASE}`, () => {
      expect(isValidNumberL(m.LENGTH, m.CASE)).toEqual(m.RESULT);
    });
  })
});

// npm run test validators.test.js
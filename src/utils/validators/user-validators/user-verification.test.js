import {
  validationAdminAuthority,
  whoIsRequester, validateRoleCredentials, 
} from '.';
import { RoleRequester } from '../../../types/types-require';
import m from './mocks';


describe(`USER-VALIDATORS - validateRoleCredentials`, () => {
  it(`validateRoleCredentials - OwnerOwner - [OwnerOwner]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.OwnerOwner,
      [RoleRequester.OwnerOwner]
    )).toEqual(true);
  });
  it(`validateRoleCredentials - OwnerUser - [OwnerOwner]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.OwnerUser,
      [RoleRequester.OwnerOwner]
    )).toEqual(false);
  });
  it(`validateRoleCredentials - OwnerUser - [OwnerOwner, OwnerUser]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.OwnerUser,
      [RoleRequester.OwnerOwner, RoleRequester.OwnerUser]
    )).toEqual(true);
  });
  it(`validateRoleCredentials - UserUser - [OwnerOwner, UserUser]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.UserUser,
      [RoleRequester.OwnerOwner, RoleRequester.UserUser]
    )).toEqual(true);
  });
  it(`validateRoleCredentials - UserUser - [UserAnotherUser]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.UserUser,
      [RoleRequester.UserAnotherUser]
    )).toEqual(false);
  });
  it(`validateRoleCredentials - UserAnotherUser - [UserAnotherUser]`, () => {
    expect(validateRoleCredentials(
      RoleRequester.UserAnotherUser,
      [RoleRequester.UserUser, RoleRequester.UserAnotherUser]
    )).toEqual(true);
  });
});

describe(`USER-VALIDATORS - whoIsRequester`, () => {
  it(`whoIsRequester - OwnerOwner`, () => {
    expect(whoIsRequester(m.Owner, m.RightUserId)).toEqual(RoleRequester.OwnerOwner);
  });
  it(`whoIsRequester - OwnerUser`, () => {
    expect(whoIsRequester(m.Owner, m.WrongUserId)).toEqual(RoleRequester.OwnerUser);
  });
  it(`whoIsRequester - UserUser`, () => {
    expect(whoIsRequester(m.User, m.RightUserId)).toEqual(RoleRequester.UserUser);
  });
  it(`whoIsRequester - UserAnotherUser`, () => {
    expect(whoIsRequester(m.User, m.WrongUserId)).toEqual(RoleRequester.UserAnotherUser);
  });
});

describe(`USER-VALIDATORS - validationAdminAuthority`, () => {
  it(`validationAdminAuthority - NoOwner NoAdmin NoSuper`, () => {
    expect(validationAdminAuthority(m.NoOwner, m.OwnerId).valid).toEqual(false);
  });
  it(`validationAdminAuthority - Owner NoAdmin NoSuper`, () => {
    expect(validationAdminAuthority(m.Owner, m.OwnerId).valid).toEqual(true);
  });
  it(`validationAdminAuthority - NoOwner Admin NoSuper`, () => {
    expect(validationAdminAuthority(m.NoOwnerAdmin, m.AdminId).valid).toEqual(true);
  });
  it(`validationAdminAuthority - NoOwner NoAdmin Super`, () => {
    expect(validationAdminAuthority(m.NoOwnerSuper, m.SuperId).valid).toEqual(true);
  });

});


// npm run test user-validators.test.js

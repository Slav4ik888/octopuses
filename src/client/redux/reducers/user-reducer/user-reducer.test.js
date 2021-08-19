import reducer from './user-reducer';
import { userActionType } from '../../action-types.ts';
import { mockInitialState, mockProtectionCase, mockSetUser,
  mockSetCompany, mockSetDemoAccess, mockUpdateCompanyPayers, mockChangePayer,
mockDeletePayer } from './mocks';


describe(`USER Reducer`, () => {

  it(`Reducer WITHOUT additional parametres should return initional state`, () => {
    expect(reducer(void 0, {})).toEqual(mockInitialState);
  });

  it(`Reducer LOADING_USER`, () => expect(
    reducer({ loading: false }, { type: userActionType.LOADING_USER }))
    .toEqual({ loading: true }));
  
  it(`Reducer LOADING_USER_OFF`, () => expect(
    reducer({ loading: true }, { type: userActionType.LOADING_USER_OFF }))
    .toEqual({ loading: false }));
  
  it(`Reducer SET_PROTECTION_CASE`, () => expect(
    reducer(mockProtectionCase.OLD_STATE, {
      type: userActionType.SET_PROTECTION_CASE,
      payload: mockProtectionCase.PAYLOAD,
    }))
    .toEqual(mockProtectionCase.STATE));
  
  it(`Reducer SET_AUTHENTICATED`, () => expect(
    reducer({ loading: true }, { type: userActionType.SET_AUTHENTICATED }))
    .toEqual({ authenticated: true, loading: false }));
  
  it(`Reducer SET_UNAUTHENTICATED`, () => expect(
    reducer({ loading: true }, { type: userActionType.SET_UNAUTHENTICATED }))
    .toEqual(mockInitialState));

  it(`Reducer SET_USER`, () => expect(
    reducer(mockSetUser.OLD_STATE, {
      type: userActionType.SET_USER,
      payload: mockSetUser.PAYLOAD,
    }))
    .toEqual(mockSetUser.STATE));
  
  it(`Reducer SET_COMPANY`, () => expect(
    reducer(mockSetCompany.OLD_STATE, {
      type: userActionType.SET_COMPANY,
      payload: mockSetCompany.PAYLOAD,
    }))
    .toEqual(mockSetCompany.STATE));
  
  it(`Reducer SET_DEMO_ACCESS`, () => expect(
    reducer(mockSetDemoAccess.OLD_STATE, { type: userActionType.SET_DEMO_ACCESS }))
    .toEqual(mockSetDemoAccess.STATE));
  
  it(`Reducer UPDATE_COMPANY_PAYERS`, () => expect(
    reducer(mockUpdateCompanyPayers.OLD_STATE, {
      type: userActionType.UPDATE_COMPANY_PAYERS,
      payload: mockUpdateCompanyPayers.PAYLOAD,
    }))
    .toEqual(mockUpdateCompanyPayers.STATE));
  
  it(`Reducer CHANGE_SELECTED_PAYER`, () => expect(
    reducer(mockChangePayer.OLD_STATE, {
      type: userActionType.CHANGE_SELECTED_PAYER,
      payload: mockChangePayer.PAYLOAD,
    }))
    .toEqual(mockChangePayer.STATE));
  
  
  mockDeletePayer.forEach(m => it(`Reducer DELETE_PAYER - ${m.DESCRIPTION}`, () => expect(
    reducer(m.OLD_STATE, {
      type: userActionType.DELETE_PAYER,
      payload: m.PAYLOAD,
    }))
    .toEqual(m.STATE)));


});


describe(`Action creators work correctly`, () => {
  // it(`loadOffers`, () => {
  //   expect(ActionCreator.loadOffers(mockWithFavorite)).toEqual({
  //     type: ActionType.LOAD_OFFERS,
  //     payload: mockWithFavorite,
  //   });
  // });

  // it(`loadComments`, () => {
  //   expect(ActionCreator.loadComments(mockComments)).toEqual({
  //     type: ActionType.LOAD_COMMENTS,
  //     payload: mockComments,
  //   });
  // });

  // it(`loadNearbyOffers`, () => {
  //   expect(ActionCreator.loadNearbyOffers(mockWithFavorite)).toEqual({
  //     type: ActionType.LOAD_NEARBY,
  //     payload: mockWithFavorite,
  //   });
  // });
});




// npm run test user-reducer.test.js

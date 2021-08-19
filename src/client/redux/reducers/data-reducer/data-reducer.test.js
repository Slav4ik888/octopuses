import reducer from './data-reducer';
import { dataActionType } from '../../action-types.ts';
import { mockInitialState, mockChapters } from './mocks';
import mockAddChapter from './mock-add-chapter';
// const api = createAPI(() => {});


describe(`DATA Reducer`, () => {

  it(`Reducer WITHOUT additional parametres should return initional state`, () => {
    expect(reducer(void 0, {})).toEqual(mockInitialState);
  });
  it(`Reducer SET_INITIAL - возвращает начальные значения`, () => expect(reducer({ loading: true, activeDocument: {} }, { type: dataActionType.SET_INITIAL })).toEqual(mockInitialState));

  it(`Reducer LOADING_DATA`, () => expect(reducer({ loading: false }, { type: dataActionType.LOADING_DATA })).toEqual({ loading: true }));
  it(`Reducer LOADING_DATA_OFF`, () => expect(reducer({ loading: true }, { type: dataActionType.LOADING_DATA_OFF })).toEqual({ loading: false }));
  it(`Reducer SET_CHAPTERS`, () => expect(reducer({ loading: true }, {
    type: dataActionType.SET_CHAPTERS,
    payload: mockChapters,
  })).toEqual({ loading: false, chapters: mockChapters }));


  mockAddChapter.forEach((item) => it(`Reducer ADD_CHAPTER`, () => expect(
    reducer(item.STATE, {
      type: dataActionType.ADD_CHAPTER,
      payload: {
        currentPageIdx: item.PAYLOAD.currentPageIdx,
        chapterObj: item.PAYLOAD.chapterObj
      }
    })).toEqual(item.RESULT)));


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


describe(`DATA Operation work correctly`, () => {

  // it(`loadOffers work correctly`, () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const offersLoader = Operation.loadOffers();

  //   apiMock
  //     .onGet(`/hotels`) // Чтобы мок на запрос `/hotels`
  //     .reply(200, [{fake: true}]); // вернул ответ 200 и массив таких данных [{fake: true}]

  //   return offersLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(2); // Проверяем, что dispatch был вызван
  //       expect(dispatch).toHaveBeenNthCalledWith(1, { // Проверяем с какими данными этот вызов был произведён
  //         type: ActionType.SET_IS_LOADING,
  //         payload: true,
  //       });
  //       expect(dispatch.mock.calls[0][0]).toEqual({
  //         type: ActionType.SET_IS_LOADING,
  //         payload: true,
  //       });

  //       expect(dispatch.mock.calls[1][0]).toEqual({
  //         type: ActionType.SET_IS_LOADING,
  //         payload: false,
  //       });

  //       // expect(dispatch).toHaveBeenNthCalledWith(1, { // Проверяем с какими данными этот вызов был произведён
  //       //   type: ActionType.LOAD_OFFERS,
  //       //   payload: [{fake: true}],
  //       // });
  //     });
  // });
});

// npm run test data-reducer.test.js

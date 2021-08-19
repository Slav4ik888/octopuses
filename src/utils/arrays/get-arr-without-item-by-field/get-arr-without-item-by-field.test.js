import { getArrWithoutItemByField } from '.';
import * as m from './mocks';


describe(`ARRAY.JS - getArrWithoutItemByField`, () => {
  it(`Удаляем по полю id`, () => {
    expect(getArrWithoutItemByField([...m.mockArray], `field1`, m.mockFieldTrue)).toEqual(m.mockArrayWithoutItem);
  });

  it(`Удаляем несуществующий объек`, () => {
    expect(getArrWithoutItemByField([...m.mockArray], `field1`, m.mockFieldFalse)).toEqual(m.mockArray);
  });
});


// npm run test get-arr-without-item-by-field.test.js
import { updateArrWithItemByField } from '.';
import {
  mockArray, mockFieldUpdate, mockArrayUpdated, mockFieldUpdateWithoutAnyFields,
mockArrayUpdateWithoutAnyFields
} from './mocks';


describe(`ARRAY.JS - updateArrWithItemByField`, () => {
  it(`Обновляем по полю id`, () => {
    expect(updateArrWithItemByField([...mockArray], `id`, mockFieldUpdate)).toEqual(mockArrayUpdated);
  });

  it(`Обновляем несуществующим объектом, он добавляется к массиву`, () => {
    expect(updateArrWithItemByField([...mockArray], `id`, { id: `555` })).toEqual([...mockArray, { id: `555` }]);
  });

  it(`При отсутствии items создаёт пустой массив и добавляет к нему value`, () => {
    expect(updateArrWithItemByField(undefined, `id`, { id: `555` })).toEqual([{ id: `555` }]);
  });

  it(`Если стоит flags ['update'], то в обновляемом объекте, обновляются только те поля что переданы, остальные имеющиеся остаются без изменений`, () => {
    expect(updateArrWithItemByField([...mockArray], `id`, mockFieldUpdateWithoutAnyFields, `update`)).toEqual(mockArrayUpdateWithoutAnyFields);
  });
  

});


// npm run test update-arr-with-item-by-field.test.js
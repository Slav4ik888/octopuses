import { getObjectWithoutField } from './get-object-without-field.js';
import mocks from './mocks';


describe(`OBJECTS - getObjectWithoutField`, () => {
  mocks.forEach((m, i) => it(`getObjectWithoutField - ${i}`, () => {
    expect(getObjectWithoutField(m.TEST, m.FIELD)).toEqual(m.RESULT);
  }));
});

// npm run test get-object-without-field.test.js
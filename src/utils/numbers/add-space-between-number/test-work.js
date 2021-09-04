import { addSpaceBetweenNumber } from './add-space-between-number.js';

console.log('123456: ', addSpaceBetweenNumber(123456));   // 123 456
console.log('1234.56: ', addSpaceBetweenNumber(1234.56)); // 1 234.56
console.log('1234,56: ', addSpaceBetweenNumber(1234,56)); // 1 234
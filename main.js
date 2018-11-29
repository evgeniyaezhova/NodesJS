const mathModule = require('./math-module.js');
const strModule = require('./strings-module.js')

// let result = sum(2, 4)
// console.log(result)
// console.log(sum(2, 4))

let sum = mathModule.sum;
let multiply = mathModule.multiply;
let divide = mathModule.divide;
let square = mathModule.square;

console.log(sum(2, 4));
console.log(multiply(3, 5));
console.log(divide(9, 3));
console.log(square(7));

let returnFirst = strModule.returnFirst;
let reverseStr = strModule.reverseStr;
let camelCaseIt = strModule.camelCaseIt;

console.log(returnFirst("hello"))
console.log(reverseStr("hello"))
console.log(camelCaseIt("hello"))

const strModule = require('./strings-module.js')

function sum(a, b){
  return a + b
};

function multiply(a, b){
  return a * b
};

function divide(a, b){
  return a / b
};

function square(a){
  return a * a
}

module.exports.sum = sum;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.square = square;

let returnFirst = strModule.returnFirst;
let reverseStr = strModule.reverseStr;
let camelCaseIt = strModule.camelCaseIt;

console.log(returnFirst("hello"))
console.log(reverseStr("hello"))
console.log(camelCaseIt("hello"))

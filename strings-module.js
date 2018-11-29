function returnFirst(str){
  return str.slice(0, 1)
}

function reverseStr(str){
  return str.split("").reverse().join("");
}

function camelCaseIt(str){
  let arr = str.split("")
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(i % 2){
      newArr.push(arr[i].toLowerCase());
    } else{
      newArr.push(arr[i].toUpperCase())
    }
  }
  return newArr.join("")
}

module.exports.returnFirst = returnFirst;
module.exports.reverseStr = reverseStr;
module.exports.camelCaseIt = camelCaseIt;

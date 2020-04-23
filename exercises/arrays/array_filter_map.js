// 6. Use map and filter to first determine the length of all the
// elements in an array of string values, then discard the even values
// (keep the odd values).
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  // let elementLengthArray = array.map((el) => el.length);
  // return elementLengthArray.filter((el) => el % 2 !== 0);
  return array.map((word) => word.length).filter((num) => num % 2 !== 0);
}

console.log(oddLengths(arr));
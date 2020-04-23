// 5. Use the filter method to implement a function that returns a new array
// with all of the integers from the input array. It should ignore all
// non-integer values from the input.

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
  // filter methods return new array with elements
  // for which the call back returns truthy value
  return array.filter((el) => Number.isInteger(el));
}

// function removeNonInteger(array) {
//   return array.filter((el) => el);
// }

// function checkTruthy(num) {
//   return Number.isInteger(num);
// }
// function removeNonInteger(array) {
//   return array.filter(checkTruthy);
// }

let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
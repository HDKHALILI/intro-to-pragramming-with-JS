// 3. Use object literal syntax (eg. { key: value, ...} notation) to
// create an object that behave as an array in a for statement. The object
// should contain at least 3 elements. You should place your code between
// the braces in the 'let' statement
let myArray = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  length: 5
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
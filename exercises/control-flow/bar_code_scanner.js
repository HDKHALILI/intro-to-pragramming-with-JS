// 4. What does the following code log to the console, and why?
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// -> 'Product2'
// -> 'Product3'
// -> 'Product not found!'

// Why? - we are not breaking out of the code as soon as match is found.
// everything from the matched clause are executed
// to stop fall through we need to add break statement after each
// console.log()

// 5. Refactor this statement to use if statement
// return foo() ? 'bar' : qux

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

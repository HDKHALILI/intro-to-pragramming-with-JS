// write a function that logs if the argument is odd or even
// add validation to make sure argument is integer
function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    console.log(num % 2 === 0 ? 'even' : 'odd');
  } else {
    console.log(`${num} is not an integer`)
    return;
  }
}

evenOrOdd(3);
evenOrOdd(10);
evenOrOdd(2.4);
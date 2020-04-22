// solution 1
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
  return result;
}

// solution 2
// function factorial(number) {
//   let result = 1;
//   for (let counter = number; counter > 0; counter -= 1) {
//     result *= counter;
//   }
//   return result;
// }

// solution 3 - using recursion
function factorialRecursive(num) {

  if (num < 1) {
    return 1;
  } else {
    // times current number with the current number - 1;
    // when the call reaches the bottom of tree
    // all the return values are multiplied to gether
    // like this for factorial of 8: 8 * 7 * 6 * 5 * 4 * 3 * 2
    return num * factorialRecursive(num - 1);
  }


}

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));
// console.log(factorial(8));
// console.log(factorialRecursive(0));
// console.log(factorialRecursive(1));
// console.log(factorialRecursive(2));
// console.log(factorialRecursive(3));
// console.log(factorialRecursive(4));
// console.log(factorialRecursive(5));
// console.log(factorialRecursive(6));
// console.log(factorialRecursive(7));
console.log(factorialRecursive(8));
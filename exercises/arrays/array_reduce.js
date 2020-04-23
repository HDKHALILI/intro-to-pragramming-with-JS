// 7. Use reduce to compute the sum of the squares of all of the
// numbers in an array
let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((sum, num) => sum + (num * num), 0);
}

// NOTE: if you don't provide the starting value (second argument to reduce)
// the first element of the array will be used as a starting value
// the iteration will start from the second element
// for the above array:
// with starting value: -> 83 ---> (3 * 3) + (5 * 5) + (7 * 7)
// without starting value: -> 77 ---> 3 + (5 * 5) + (7 * 7)

console.log(sumOfSquares(numbers));
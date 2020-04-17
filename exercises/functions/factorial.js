// Use the times function shown below to write a program that logs
// the value of 1! (one factorial), 2! (two factorial), 3!, 4! and 5!
// (five factorial) to the console.
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// 1! (one factorial)
console.log("1! (one factorial)");
times(1, 1); // -> 1

// 2! (two factorial)
console.log("2! (two factorial)");
times(times(1, 1), 2); // -> 2

// 3! (three factorial)
console.log("3! (three factorial)");
times(times(times(1, 1), 2), 3); // -> 6

// 4! (four factorial)
console.log("4! (four factorial)");
times(times(times(times(1, 1), 2), 3), 4); // -> 24

// 5! (five factorial)
console.log("5! (five factorial)");
times(times(times(times(times(1, 1), 2), 3), 4), 5); // -> 120

// 4. Does the following code produce error?
// Why or why not?
// What does this code send to the console?

for (let i = 0; i < 5;) {
  // on the first iteration i += 1 produce 1
  // return value of the expression
  // 1 gets logged to the console
  // this makes the output 1 number
  // greater than the actual value of i
  // at that iteration
  console.log(i); // logs -> 0 1 2 3 4 
  console.log(i += 1); // logs -> 1 2 3 4 5
}

// it doesn't produce any error
// why? - because all 3 components in a for loop
// are optional
// logs:
// -> 1
// -> 2
// -> 3
// -> 4
// -> 5
// i is a scoped in for loop's body
// i is incremented as an argument to console.log()
// when i += 1 runs it does increment i with 1
// because the increment is done in the body and logged,
// output is 1 number higher than the initial value of i at each
// iteration

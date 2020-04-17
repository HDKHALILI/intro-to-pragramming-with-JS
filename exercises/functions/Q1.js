// What does this code log to the console?
// Does executing the foo function affect the output?
// Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // -> 1
// logs 1 to the console.
// calling foo doesn't affect the output.
// because we are declaring a new local variable 'bar' inside foo with
// the same name as a global variable 'bar'. they are not aware of
// if we hadn't used the new variable decleration keyword then
// the value of bar would have been changed.

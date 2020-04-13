// 3. What happens when you run the following program?
// Why do we get that result
{
  let foo = "bar";
}

console.log(foo); // ReferenceError
// Since variable foo is declared inside a block it is only
// available inside that block.
// let statement createse a block level variable which is invisible
// to the rest of the program.

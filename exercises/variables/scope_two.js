// 5. Take a look at this code snippet
let foo = "bar";
{
  let foo = "qux";
}

console.log(foo); // -> 'bar'
// What does this program log to the consol? Why?
// program logs 'bar'
// why? -> Since the foo outside the block ({}) is visible
// in the entire program console.log(foo) has access to it.
// block creates its own scope like world or container which
// doesn't interfere with other world / container.
// that is why we can have variables with the same name
// as longs as they are not in the same scope.
// since we have declared foo variable with let statement
// it doesn't change the value of foo outside the block.

// Functions
// What is a function:
// -> a procedure that let you extract the code and run it as a
// seperate unit.
// Why have a function: allows us to execute a collection of code
// multiple times without writing it again and again.
// if we need to change something we only need to do it in one place
// instead of multiple times.

// ----- Defining a function -----
// function key word is used to define a function
// followed by a name
// immidiately followed by ()
// followed by {} (pair of opening and closing curly braces)

// there are 3 ways to define a function
// 1. function decleration
// we can use this function before it is defined.
// to use a function use the name immidiatelly followed by ()
say();
function say() {
  console.log("Hi");
}

// 2. function expression
// cannot use it before its definition
let greet = function () {
  console.log("Hi");
};

// 3. function expression with arrow function syntax
// cannot be used before it is defined
let greeting = () => {
  console.log("Hi");
};

// can have an implicit return
let add = (a, b) => a + b;

// if the body of a function has more statements then
// use a curly braces and have an implicit return
let times = (a, b) => {
  console.log(`Multiplying ${a} and ${b}`);
  return a * b;
};

// if only one parameter () can be omited - other times () must be present
let print = (text) => console.log(text);

// ----- Parameter and Argument -----
// parameter and argument are used to pass data into function
// (a, b) here a and b is called parameter
function subtract(a, b) {
  // here a and b are called argument
  return a - b;
}

// here 20 and 10 are called argument
subtract(20, 10);

// ---- Deefault Parameter -----
// why? - sometimes you want to call it without parameter
function emotionalise(words, emotion = "!") {
  return words + emotion;
}

// emotion will be !
emotionalise("Oh"); // -> Oh!
// emotion will be :)
emotionalise("Oh", ":)"); // -> Oh:)

// ---- Variable Scope ----
// what? - where a variable is accessable - global and local
// why? - you want to be able to control the availability
// of data - somethings need to be accessable every where in the program
// - global
// somethings need to be accessable only in certain place - local
// variables defined inside function is local variables
// anything that is not with in {} is global.
// parameter is a local variable
// the key word you use to declare a variable and the location where
// you declare it -- determine whether the variable is global or local
let globalGreeting = "Hello";
function greetPeople() {
  // we can use global variable inside function
  console.log(globalGreeting);
  // we can change the value of global variable from
  // within a function
  globalGreeting = "Hello, World Citizens";

  // local variable
  let localGreeting = "Hi, mate!";
}

// we cannot access local variable outside of its local area
console.log(localGreeting); // -> give ReferenceError

// ----- Function vs Method -----
greetPeople(); // this is a function
"Hello".toUpperCase(); // this is a method - it is called on something

// ----- Mutating the caller -----
// sometimes the method permanently alters the object that it was
// called upon. it is said to to mutates the caller
// Primitive datas are immutable
// Arrays and Objects are mutable - thus there are methods that make
// permanent change to the object
// Example
let odds = [1, 3, 5, 7];
// makes permanent change
odds.pop();
console.log(odds); // -> [1, 3, 5]

// doesn't make permanent change
// return a copy of the object with the changes applied
odds.concat(7);
console.log(odds); // -> [1, 3, 5]

// ----- Function Composition -----
// what? - using function call as an argument to another function
// why? - allows us to chain procedures
// I am using a block here because I have functions with the same name
// in this file
{
  function add(a, b) {
    return a + b;
  }

  // a simplest function composition
  console.log(add(10, 5));

  function subtract(a, b) {
    return a - b;
  }

  function times(a, b) {
    return a * b;
  }

  // a more complex composition
  // a = return value of add(10, 5)
  // b = return value of subtract(80, 10)
  times(add(10, 5), subtract(80, 10));

  // an even more complex composition
  // a = return value of subtract(80, 10)
  // b = return value of times(subtract(20, 6), add(30, 5))
  //    for times()
  //    a = return value of subtract(20, 6)
  //    b = return value of add(30, 5)
  add(subtract(80, 10), times(subtract(20, 6), add(30, 5)));
}

// We have seen that function calls always return a value and we can
// pass that function call as an argument to another function call.
// Thus, it is vital to know what values our functions return since,
// in the final analysis, those values get passed as an arguments to
// other functions.

// ----- Final Notes -----
// JavaScript is a pass-by-value and pass-by-reference language
// primitive: pass-by-value (copy of the value is give, after
//  variable assignment their values are independent)
// objects and arrays: pass-by-reference (there value are connected
//  change in one variable reflects the change in the other)

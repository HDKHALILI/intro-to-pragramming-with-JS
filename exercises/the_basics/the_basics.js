// --- My Solutions ---
// 1. Concatenate two or more strings
console.log("Hadi" + " " + "Khalili");

// ----------

// 2. Use the arithmetic operators to determine the individual
// digits of a 4-digit number like 4936
// thousands place - 4, hundreds place - 9,
// tens place - 3
// ones place - 6
let number = 4936;
console.log(`Number: ${number}`);
let thousandsPlace = (number - (number % 1000)) / 1000;
console.log(`Thousands's place: ${thousandsPlace}`);
let hundredsPlace = ((number % 1000) - (number % 100)) / 100;
console.log(`Hundred's place: ${hundredsPlace}`);
let tensPlace = ((number % 100) - (number % 10)) / 10;
console.log(`Ten's place: ${tensPlace}`);
let onesPlace = number % 10;
console.log(`One's place: ${onesPlace}`);
console.log("-------------------------------------");

// --- Instructor Solution ---
let num = 4936;

let ones = num % 10; // 6
console.log("ones", ones);

// removing ten's place
// 4936 - 6 = 4930, 4930 / 10 = 493
num = (num - ones) / 10;

let tens = num % 10;
console.log("tens", tens);

// removing ten's place
num = (num - tens) / 10;

let hundreds = num % 10;
console.log("hundreds", hundreds);

let thousands = (num - hundreds) / 10;
console.log("thousands", thousands);

// -----------

// 3. Identify the data type for each of the following.
// - 'true' -> String
// - false -> Boolean
// - 1.5 -> Number
// - 2 -> Number
// - undefined -> Undefined
// - { foo: 'bar' } -> Object

// -----------

// 4. Given the code below, indentify which lines are statements and
// which are expressions
var foo; // statement
foo = 5; // expression
foo; // expression

// -----------

// 5. Explain why this code logs '510' instead ofr 15
console.log("5" + 10);
// In the above code JavaScript sees string and then a + (concatenation)
// and coerce's 10 to string and then concatenate them together.
// every + expression that has a string operand produces a string result

// -----------
// 5. Refactor the code from previous exercise to use explicit
// coersion, so it logs 15 instead
console.log(Number("5") + 10);

// -----------

// 7. Use the template literal syntax along with the expression
// Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.
console.log(`the value of 5 + 10 is ${Number("5") + 10}.`);

// -----------

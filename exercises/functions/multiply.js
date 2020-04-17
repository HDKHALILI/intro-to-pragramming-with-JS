// Write a program that uses a multiply method to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output
//the numbers and result as a simple equation.

function getNumber(prompt) {
  let readlineSync = require("readline-sync");
  let num = readlineSync.question(prompt);
  return num;
}

let num1 = getNumber("Enter first number: ");
let num2 = getNumber("Enter second number: ");

function multiply(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

multiply(num1, num2);

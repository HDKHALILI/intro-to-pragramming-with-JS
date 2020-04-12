// --- My Solutions ---
// 1. Concatenate two or more strings
console.log("Hadi" + " " + "Khalili");

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
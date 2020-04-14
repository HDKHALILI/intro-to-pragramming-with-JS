let rlSync = require("readline-sync");
let firstName = rlSync.question("What is you first name? ");
let lastName = rlSync.question("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);

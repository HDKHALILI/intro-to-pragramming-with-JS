let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

// this loop is indentical in function to the while loop
// in names.js
for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

// The above loop follows this squence:
// 1. Declare and initialise the index variable to 0.
// 2. if index is not less than the array length, go to step 6.
// 3. Execute the loop body
// 4. Increment index
// 5. Go back to step 2
// 6. Log the result
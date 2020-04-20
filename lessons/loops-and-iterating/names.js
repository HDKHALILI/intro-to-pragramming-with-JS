// Goal: We want to convert every name to uppercase
// and append it to an empty array

// variable names hold an array of names
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// the empty array that we will append uppercased names
let upperNames = [];

// variable index hold the position in the array
// index initialised to 0, since array index starts at 0
let index = 0;

// create a while loop
while (index < names.length) {
  // we access the element at names[index] and use
  // it to call toUpperCase method
  // the return value of the method is stored in
  // variable upperCaseName 
  let upperCaseName = names[index].toUpperCase();

  // using array's push method to append uppercased name
  // to upperName array
  upperNames.push(upperCaseName);

  // increment index - to move up the array
  index += 1;
}

console.log(upperNames);
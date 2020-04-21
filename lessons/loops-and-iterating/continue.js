let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

// Goal: make each name in the names array to uppercase
// and append them to upperNames except 'Naveed'

// use 'continue'
for (let index = 0; index < names.length; index += 1) {
  // skip "Naveed"
  if (names[index] === 'Naveed') {
    continue;
  }
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

// console.log(upperNames);

// we can rewrite a loop that uses 'continue' with a negated if
// conditional
// reset upperNames
upperNames = [];
for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames);
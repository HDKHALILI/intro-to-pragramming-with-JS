// return all caps for string longer than 10
// else return original
function allCaps(string) {
  return ((string.length > 10) ? string.toUpperCase() : string)
}

console.log(allCaps('hello world'))
console.log('goodbye');
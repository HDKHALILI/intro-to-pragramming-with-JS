// Write a function that searches an array of srings for every element
// that matches the regular expression given by its argument.
// The function should return all matching elements in an array

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter((word) => word.match(regex));
}

console.log(allMatches(words, /lab/));
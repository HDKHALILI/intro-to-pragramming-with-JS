let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    // without break statement the loop runs
    // for every element even if 5 is the first element
    // we have found what we need, no need to look any further
    break;
  }
}

console.log(indexOfFive);
console.log(array[indexOfFive]);
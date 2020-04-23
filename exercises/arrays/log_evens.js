// 2. Log all of the even values from myArray to the console
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// solution 1 - use for loop
for (let index = 0; index < myArray.length; index += 1) {
  if (myArray[index] % 2 === 0) {
    console.log(myArray[index])
  }
}
console.log('---------------\n');

// solution 2 - use forEach
myArray.forEach((el) => {
  if (el % 2 === 0) {
    console.log(el)
  }
});
console.log('---------------\n');

// solution 3 - use filter and then forEach
myArray.filter((el) => el % 2 === 0).forEach((el) => console.log(el));

// multidimensional array
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
]

console.log('----- multi-demensional array');
for (let outerIndex = 0; outerIndex < myArray.length; outerIndex += 1) {
  let innerArray = myArray[outerIndex];
  for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex += 1) {
    if (innerArray[innerIndex] % 2 === 0) {
      console.log(innerArray[innerIndex])
    }
  }
}

// we can use forEach
console.log('----- multi-demensional array');
// callback is invocked once per element of the array
myArray.forEach(nestedArray => {
  nestedArray.forEach(element => {
    if (element % 2 === 0) {
      console.log(element)
    }
  })
});

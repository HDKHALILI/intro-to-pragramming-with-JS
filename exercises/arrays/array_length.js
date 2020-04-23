// 1. In the following code, what are the final length values for
// array1, array2, array3, array4, and array5 ?

let array1 = [1, 2, undefined, 4] // length = 4
console.log('array1 length = ', array1.length)

let array2 = [1];
array2.length = 5; // length = 5
console.log('array2 length = ', array2.length)

let array3 = [];
// array index standard: index must be a positive integer starting at 0
// none standard index is not counted in length
array3[-1] = [1]; // length = 0
console.log('array3 length = ', array3.length)

let array4 = [1, 2, 3, 4, 5];
// we are turncating the array
array4.length = 3; // length = 3
console.log('array4 length = ', array4.length)

let array5 = [];
// 0 - 100 index will be unset elements
// these indeces will not be initialised to anything
// but the length does count them
array5[100] = 3 // length = 101
console.log('array5 length = ', array5.length)
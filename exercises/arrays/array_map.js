// 4. use map function to create a new array that contains one element
// for each element in the original array. If the element is even
// the corrosponding element should be 'even' if odd the be 'odd'
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

let evenOdd = myArray.map((element) => element % 2 === 0 ? 'even' : 'odd');
console.log(evenOdd);
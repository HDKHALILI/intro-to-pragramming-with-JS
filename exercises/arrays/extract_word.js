// 10. write code to extract the word 'mem' from the following nested array
let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

// using for loop
function extractWordFromArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] === 'mem') {
        return array[i][j]
      }
    }
  }
}

console.log(extractWordFromArray(arr));

// using forEach
arr.forEach((nestedArray) => {
  nestedArray.forEach((element) => {
    if (element === 'mem') {
      console.log(element);
    }
  })
})

// or good old index
console.log(arr[1][2]);
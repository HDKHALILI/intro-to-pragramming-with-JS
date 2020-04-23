// 6. Use map and filter to first determine the length of all the
// elements in an array of string values, then discard the even values
// (keep the odd values).
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  // let elementLengthArray = array.map((el) => el.length);
  // return elementLengthArray.filter((el) => el % 2 !== 0);
  return array.map((word) => word.length).filter((num) => num % 2 !== 0);
}

console.log(oddLengths(arr));

// using reduce
function oddLengthsReduce(array) {
  return array.reduce((output, word) => {
    if (word.length % 2 !== 0) {
      output.push(word.length)
    }

    return output;
  }, [])
}

// oddLengthsReduce(arr);

console.log(oddLengthsReduce(arr));
// 7. Create a function that creates and returns a copy of an object.
// The function takes two arguments: the objectto copy and an array
// of the keys that you want to copy. You can omit the array of kes,
// in which you should copy all the keys of the object.
function copyObj(objToCopy, keys) {
  let targetObject = {}
  if (keys) {
    keys.forEach(key => targetObject[key] = objToCopy[key]);
    return targetObject
  } else {
    return Object.assign(targetObject, objToCopy)
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo']);
console.log(newObj2);

// 8. What does the following program log to the console? Why?
let foo = {
  a: 'hello',
  b: 'world',
}

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // -> hi
// foo.a -> hi --- because objects are mutable.
// we are assigning the 'a' property to new value 'hi'

console.log(qux); // hello
// qux hold primitive data, which is immutable
// argument2 is reasssigned to 'hi' which has no effect on
// the value of qux
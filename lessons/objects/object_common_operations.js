// Common Operation of objects
// Object.keys(obj) -> []
// extracts the keys from every own property in an object to an array
// -->it doesn't include keys from prototype object
// Note: the order of key-value-pairs are not maintained.
let person = { name: 'Bob', age: 30, height: '6ft' };
let personKeys = Object.keys(person); // -> ['name', 'age', 'height]

// Object.values(obj) -> []
// extracts the values from every own property in an object to an array
// --> it doesn't include values from prototype object
let personValues = Object.values(person); // -> ['Bob', 30, '6ft']
// Note: cannot predict the order of the values in the returned array

// Object.entries(obj) -> [[]]
// return array of nested arrays. Each nested array has two elements:
// one of the object's keys and its corresponding value:
let personEntries = Object.entries(person);
// -> [[ 'name', 'Bob' ], [' age' , 30 ], [ 'height', '6ft' ]]

// Object.assign(args) -> {}
// allows you to merge two or more objects -> single object
let objA = { a: 'foo' }
let objB = { b: 'bar' }
// first arg: is the target obj - will be mutated
// second arg: content will be coppied
Object.assign(objA, objB); // mutates objA, not objB
console.log(objA); // -> { a: 'foo', b: 'bar' }

// creating a new object from objA and objB
// Note: Object.assign() can take more than two arguments
// first arg: pass an empty object ({})
let newObj = Object.assign({}, objA, objB);
console.log(newObj); // -> { a: 'foo', b: 'bar' }
// objA and objB remain in their original state
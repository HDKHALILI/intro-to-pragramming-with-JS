// 4. Create an array from the keys of object 'obj' below,
// with all the values converted to uppercase. Your implementation
// must not mutate 'obj'
let obj = {
  b: 2,
  a: 1,
  c: 3,
}

// solution 1
// extract keys then map over the array and convert each element
// to uppercase
let upperCasekeys = Object.keys(obj).map((key) => key.toUpperCase());
console.log('uppercase keys:', upperCasekeys);
console.log('obj:', obj);

// solution 2
// iterate over object and convert each keys to uppercase
// and then push them to an array
let keys = []
for (let prop in obj) {
  keys.push(prop.toUpperCase());
}
console.log('keys: ', keys)

// 5. Create a new object names myObj that uses myProtoObj as its
// prototype
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// 6. Add a 'qux' property with value of '3' to the 'myObj'.
myObj.qux = 3;
console.log('myObj: ', myObj)

// Now examine the following codes
// without running the code, can you determine whether these
// two snippets produce the same output?
// 1. extract keys that are defined on the object itself, not 
// inherited ones
console.log('--- Object.keys ---');
Object.keys(myObj).forEach(function (key) {
  console.log(key);
})
// -> qux

// 2. iterate over properties defined in the object and
// the inherited ones
console.log('--- for/in ---');
for (let key in myObj) {
  // we can use hasOwnProperty here to only log "own" property
  // if (myObj.hasOwnProperty(key)) {
  //   console.log(key)
  // }
  console.log(key)
}
// -> foo
// -> bar
// -> qux
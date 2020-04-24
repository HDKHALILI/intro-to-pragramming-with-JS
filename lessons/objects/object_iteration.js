let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
}

// using for/in
for (let prop in person) {
  // using bracket ([]) notation, since prop is a variable
  console.log(person[prop])
}
// ->
//  Bob
//  30
//  6 ft

// One feature -- or downside, depending on how you look at it -- of
// for/in is that it iterates over the properties of an object's 
// prototypes as well
let obj1 = { a: 1, b: 2 }
// creates a new object (obj2) and sets the prototype for that object
// to obj1 (the argument passed in)
// obj1 is the prototype of obj2
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log('--- iterate over prototype properties too ---')
for (let prop in obj2) {
  console.log(obj2[prop])
}
// -> could be logged in different order - order is not maintained in
// objects
//  1 -- inherited property
//  2 -- inherited property
//  3 -- defined in obj2
//  4 -- defined in obj2

// This behavior is undesirable when you want to limit iteration to
// an object's own properties -- properties it defined for itself,
// not inherited. We can use the hasOwnProperty method to get around
// that problem. It takes the name of a property and returns true if it
// is the name of one of the calling object's own properties, false
// if it is not.

console.log('--- iterate over properties defined for itself ---')
for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}
// ->
//  3
//  4

// Object.keys --> return array containing all the keys of the object
// it doesn't include any keys from prototype objects.
// argument: object which you want to get they keys
let obj2Keys = Object.keys(obj2)
console.log('--- Using Object.keys(obj) ---')
obj2Keys.forEach((key) => console.log(obj2[key]));
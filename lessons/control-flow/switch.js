let a = 5;

switch (a) {
  case 5:
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
}

// the above code is functionally identical to
// the following if/else statement:
if (a === 5) {
  console.log("a is 5");
} else if (a === 6) {
  console.log("a is 6");
} else {
  console.log("a is neither 5, nor 6");
}

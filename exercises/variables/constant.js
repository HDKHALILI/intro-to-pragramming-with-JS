// 4. What happens when you run the following code? Why?
const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);
// the program runs without error before
// NAME = 'Joe' and greets victor

NAME = "Joe"; // this line gives error
// because you cannot reassign variables declared with const statement
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, ", +NAME);
console.log("Good Evening, ", +NAME);

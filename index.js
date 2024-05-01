// Q1)Rewrite the following function as an arrow function:
/******************************
 *   function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
let greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("noor"));
// Q2) Write a simple arrow function that takes two parameters and returns their sum.

let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(1, 2));

// Q3) Write a simple arrow function that squares a number.

let sum2 = (B1) => {
  return B1 * B1;
};
console.log(sum2(4));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
let numbers = [2, 3, 4, 5];
let array = numbers.map((num) => {
  return num * num;
});

console.log(array);

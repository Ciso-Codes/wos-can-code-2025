/*
  Functions
  
  a reusable block of code

  a series of steps to solve a problem
  a "black box" of sorts
*/

function greet() {
  console.log('Hello world!');
}

greet();

/* when declaring functions, we call the inputs "parameters" */
function greet2(name) {
  console.log(`Hello, ${name}`);
  console.log('Hello, ' + name);
}

/* when invoking functions, we call the inputs "arguments" */
greet2('Lancelot');

function greet3(name, timeOfDay) {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet3('Jenna', 'morning');

/* the return keyword */

function add(num1, num2) {
  return num1 + num2;
}

let result = add(2, 2);
console.log(result);

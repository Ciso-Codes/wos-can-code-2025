/* Arrow Functions */

// function declaration
function add1(num) {
  return num + 1;
}

// functions are first-class citizens in JS

// function expression
const add1Expression = function (num) {
  return num + 1;
};

add1Expression(2);

// arrow functions
// every form from here on out is a valid arrow function

// form a
const add1ArrowA = (num) => {
  return num + 1;
};

// console.log(add1ArrowA(2));

// form b
// implicit return
// if the code block is only one line
const add1ArrowB = (num) => num + 1;

console.log(add1ArrowB(2));

// form c
// if only one parameter, parentheses
// are optional
// prettier-ignore
const add1ArrowC = num => num + 1;

console.log(add1ArrowC(2));

// if the function has more than one parameter
// or zero parameters, parentheses are NOT optional

// if code block is more than one line
// curly braces are not optional
// neither is the return keyword
const sum = (num1, num2) => {
  const total = num1 + num2;
  return total;
};

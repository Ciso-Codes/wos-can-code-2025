/*
  var keyword has global or function scope
*/

console.log(`at the top of file: ${variable1}`);
console.log(`let variable at the top of file: ${variable2}`);

var fruit = 'banana';

function smoothie() {
  var fruit = 'papaya';
  var cup = [fruit, 'oat milk'];
  return cup;
}

console.log(fruit);

console.log(smoothie());

/* let keyword has block scope */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log(i);

/* const keyword has block scope */

const number = 23;
// number = 3; // cannot reassign a const variable
console.log(number);

const nums = [1, 2, 3, 4, 5];
nums[0] = 6;
// nums = [6, 7, 8, 9]; // cannot reassign a const variable

console.log(nums);

var variable1 = 'hello';
console.log(`var variable at the bottom of file: ${variable1}`);

let variable2 = 'goodbye';
console.log(`let variable at the bottom of file: ${variable2}`);

// const variable3;

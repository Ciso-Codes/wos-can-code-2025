/*
  Conditional Statements
  if, else if, else
*/

/* 
  == 2 equal signs only value
  === 3 equal signs also checks type

  both check for equality
*/

let isSweltering = false;
let isMelting = false;

if (isSweltering) {
  console.log("Don't wear a parka, you fool!");
} else if (isMelting) {
  console.log('drink plenty of water');
} else {
  console.log('be comfy');
}

/*
  FizzBuzz
  Print numbers 1 to 100
  if the current number is divisible by 3 print "fizz" instead of the number
  if the current number is divisible by 5 print "buzz" instead of the number
  if the current number is divisible by both 3 and 5 print "fizzbuzz" instead of the number
*/

// pseudocode
// for loop starting at 1 ending at 100
// in loop, if statement condition i % 3 == 0

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }
}

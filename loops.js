/* Loops */

for (let i = 0; i < 12; i++) {
  console.log('hello');
}

// down here

/* 
  4 components of a for loop

  1. Minion
  2. Starting value of our minion
  3. When the minion stops
  4. How the minion changes
*/

/*
  while loops

  deconstructed for loop
*/

let i = 0;
while (i < 12) {
  console.log('hello');
  i++;
}

/* for...of loop */

let colors = ['red', 'blue', 'yellow', 'green', 'purple'];

for (let color of colors) {
  console.log(color);
}

/* do-while loops run at least once */

j = 1;
do {
  console.log(j);
  j++;
} while (false);

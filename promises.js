/* Promises */

/* A Promise is an object */

const myPromise = new Promise((resolve, reject) => {
  // producing code that may take time
  // call resolve(value) if successful
  // call reject(error) if it fails
});

const coinTossForHeads = () => {
  return new Promise((resolve, reject) => {
    const randNum = Math.random();
    if (randNum < 0.5) {
      resolve('Success! Heads was tossed.');
    } else {
      reject('Error! Tails was tossed.');
    }
  });
};

for (let i = 1; i <= 10; i++) {
  // prettier-ignore
  coinTossForHeads()
    .then(console.log) // only runs if successful
    .catch(console.log) // only runs if unsuccessful
    .finally(() => console.log('coin toss complete')) // runs when settled
}

// alternative approach to consuming a promis
/* try {
  coinTossForHeads();
  console.log('hooray');
} catch (error) {
  console.log('boo');
} finally {
  console.log('complete');
} */

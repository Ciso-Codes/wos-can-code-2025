const readline = require('node:readline/promises'); // import

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask() {
  const name = await rl.question("What's your name? ");
  console.log(`Nice to meet you, ${name}!`);
  rl.close();
}

ask();

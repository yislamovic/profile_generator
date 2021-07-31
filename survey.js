const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = [];
rl.question('Whats your name? ', (answer) => {
  arr.push(answer);
  rl.question('Dogs or Cats? ', (answer) => {
    arr.push(answer);
    rl.question('Swimming or hiking? ', (answer) => {
      arr.push(answer);
      rl.question('How many cats do you own? ', (answer) => {
        arr.push(answer);
        rl.question('What is your super power? ', (answer) => {
          arr.push(answer);
          console.log(`${arr.shift()} likes ${arr.shift()} and prefers ${arr.shift()}. He also owns ${arr.shift()} cats and even has the super power of ${arr.shift()}`);
          rl.close();
        });
      });
    });
  });
});





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter miles: ', (miles) => {
  const kilometers = parseInt(miles) * 1.6;
  console.log(kilometers + ' Kilometers');
  rl.close();
});


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let [ dividend, divisor ] = input.split(' ');
  console.log(`${dividend} mod ${divisor} = ${dividend % divisor}`);
});

function mod(dividend, divisor, from, to) {
	for (let i = from; i < to; i++) {
		console.log(`${i} mod ${7} = ${i % 7}`);
	}
}

// let read = new readLine();

// do {
//   let input = read.readLine();
//   console.log(input);
// } while(input);

// mod(1, 7, 1, 10);
// console.log(mod(1, 7));

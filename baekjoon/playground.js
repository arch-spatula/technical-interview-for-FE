const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [input] = fs.readFileSync(filePath).toString().split('\n').map(Number);

/**
 * @param {number} num
 * @returns {string}
 */
function solution(num) {
  return `${(num + 1) * 2} ${(num + 1) * 3}`;
}

console.log('SHIP NAME      CLASS          DEPLOYMENT IN SERVICE');
console.log('N2 Bomber      Heavy Fighter  Limited    21        ');
console.log('J-Type 327     Light Combat   Unlimited  1         ');
console.log('NX Cruiser     Medium Fighter Limited    18        ');
console.log('N1 Starfighter Medium Fighter Unlimited  25        ');
console.log('Royal Cruiser  Light Combat   Limited    4         ');

module.exports = {
  solution,
};

// --------------------------------------------------------------------------

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const answer = [];
// rl.on('line', (line) => {
//   const [A, B] = line.split(' ').map((str) => +str);
//   try {
//     answer.push(A + B);
//   } catch (error) {
//     rl.close();
//   }
// }).on('close', () => {
//   answer.forEach((num) => console.log(num));
//   process.exit();
// });

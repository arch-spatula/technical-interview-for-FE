const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [input] = fs.readFileSync(filePath).toString().split('\n');

/**
 * @param {string} input
 * @returns {string}
 */
function solution(input) {
  return input.toLocaleUpperCase();
}

console.log(solution(input));

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

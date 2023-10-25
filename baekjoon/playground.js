const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [input] = fs.readFileSync(filePath).toString().split(' ').map(Number);

/**
 * @param {number} num
 * @returns {number}
 */
function solution(num) {
  let result = 1;
  if (num <= 1) return 1;
  for (let i = num; 1 <= i; i--) {
    result *= i;
  }
  return result;
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

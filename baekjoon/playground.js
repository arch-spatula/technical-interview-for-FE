const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(Number)
  .slice(0, 3);

/**
 * @param {number[]} nums
 * @returns {number}
 */
function solution(nums) {
  return nums.sort((a, b) => a - b)[1];
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

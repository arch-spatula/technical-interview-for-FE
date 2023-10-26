const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, m, k] = fs.readFileSync(filePath).toString().split(' ').map(Number);

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */
function solution(n, m, k) {
  // 배열 만들기, 원소 탐색
  let idx = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (idx === k) return [y, x];
      idx += 1;
    }
  }

  return [n, m];
}

const [x, y] = solution(n, m, k);
console.log(x, y);

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

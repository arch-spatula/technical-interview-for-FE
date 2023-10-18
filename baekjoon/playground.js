const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((str) => str.split(' ').map((elem) => parseInt(elem)));

/**
 * @param {number} n
 * @param {number} s
 * @returns {number}
 */
function solution(n, s) {
  // N명의 사람들과 ACM 수석심판
  // S 만큼의 주식을 보유
  // 이를 동등하게 나누어 갖기
  // 단, 보유한 주식이 할당받는 인원 수로 나누어 떨어지지 않는 경우 나머지가 발생할 수 있다.
  // X를 각 사람이 배분받는 몫
  // X의 최대값을 계산
  return parseInt(s / (n + 1));
}

console.log(solution(input[0][0], input[0][1]));
console.log(solution(input[1][0], input[1][1]));
console.log(solution(input[2][0], input[2][1]));
console.log(solution(input[3][0], input[3][1]));

module.exports = {
  solution,
};

// --------------------------------------------------------------------------

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const answer = [];
// rl.on("line", (line) => {
//   const [A, B] = line.split(" ").map((str) => +str);
//   try {
//     answer.push(A + B);
//   } catch (error) {
//     rl.close();
//   }
// }).on("close", () => {
//   answer.forEach((num) => console.log(num));
//   process.exit();
// });

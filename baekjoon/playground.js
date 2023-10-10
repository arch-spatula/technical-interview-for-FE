const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [input] = fs.readFileSync(filePath).toString().split('\n').map(String);

const grade = {
  'A+': '4.3',
  A0: '4.0',
  'A-': '3.7',
  'B+': '3.3',
  B0: '3.0',
  'B-': '2.7',
  'C+': '2.3',
  C0: '2.0',
  'C-': '1.7',
  'D+': '1.3',
  D0: '1.0',
  'D-': '0.7',
  F: '0.0',
};
/**
 * @param {keyof grade} input
 * @returns {grade[keyof grade]}
 */
function solution(input) {
  return grade[input];
}

console.log(solution(input));

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

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

/**
 * @param {number[]} input
 * @returns {string}
 */
function solution(input) {
  // i, j 반복문
  // n, m
  // c, p 분모분자

  // 배열을 만들고 인덱스를 읽는다.
  // 9007199254740991
  for (let i = 0; i < input; i++) {
    console.log(`${i}/${input - i}`);
  }
  Array.from({ length: 10_000_000 });
  return `${input}/${input}`;
}

console.log(solution(input[0]));

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

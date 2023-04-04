// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const countNum = parseInt(input[0]);
// const addNum = input
//   .slice(1)
//   .map((str) => str.split(" ").map((str) => parseInt(str)));

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";
let lineCount = 0;
let maxLine = 0;
rl.on("line", (line) => {
  const [num1, num2] = line.split(" ");
  if (line.includes(" ")) {
    input += +num1 + +num2 + "\n";
    lineCount += 1;
  } else {
    maxLine = +line;
  }
  if (lineCount === maxLine) {
    rl.close();
  }
}).on("close", () => {
  console.log(input);
  // input = input.split("\n");
  // const countNum = parseInt(input[0]);
  // const addNum = input
  //   .slice(1)
  //   .map((str) => str.split(" ").map((str) => parseInt(str)));
  // solution(countNum, addNum).forEach((elem) => console.log(elem));
  process.exit();
});

/**
 * @param {number} countNum
 * @param {[number, number][]} addNum
 * @returns {number[]}
 */
// function solution(countNum, addNum) {
//   return addNum.slice(0, countNum).map((elem) => elem[0] + elem[1]);
// }

// console.log(solution(countNum, addNum));

// module.exports = {
//   solution,
// };

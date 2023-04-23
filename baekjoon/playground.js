const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((elem) => elem.split(" ").map((str) => parseInt(str)));

/**
 *
 * @param {number[][]} input
 * @returns
 */
function solution(input) {
  let maxNum = -1;
  let maxNumRow = -1;
  let maxNumCol = -1;
  input.forEach((row, rowIdx) => {
    row.forEach((num, colIdx) => {
      if (num > maxNum) {
        maxNum = num;
        maxNumRow = rowIdx + 1;
        maxNumCol = colIdx + 1;
      }
    });
  });
  return [maxNum, [maxNumRow, maxNumCol]];
}

solution(input).forEach((elem) => {
  if (typeof elem === "number") console.log(elem);
  if (typeof elem === "object") console.log(elem.join(" "));
});

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

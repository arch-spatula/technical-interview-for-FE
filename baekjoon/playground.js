const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [num] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((str) => parseInt(str));

/**
 * @param {number} num
 * @returns {string}
 */
function solution(num) {
  return Array.from({ length: 2 * num - 1 }, (_, idx) =>
    Math.abs(num - idx - 1)
  )
    .map((elem) => num - elem)
    .map((elem) => " ".repeat(num - elem) + "*".repeat(2 * elem - 1))
    .join("\n");
}

console.log(solution(num));

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

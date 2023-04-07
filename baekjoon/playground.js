const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [num, arr] = [
  parseInt(input[0]),
  input[1].split(" ").map((str) => parseInt(str)),
];

/**
 * @param {number} num
 * @param {number[]} arr
 * @returns {[number, number]}
 */
function solution(num, arr) {
  return [Math.min(...arr.slice(0, num)), Math.max(...arr.slice(0, num))];
}

console.log(solution(num, arr).join(" "));

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

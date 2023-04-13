const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const basketSize = parseInt(input[0].split(" ")[0]);
const basketCaseSize = parseInt(input[0].split(" ")[1]);
const basketCase = input
  .slice(1, basketCaseSize + 1)
  .map((str) => str.split(" ").map((str) => parseInt(str)));

/**
 * @param {number[]} arr
 * @param {number} idx1
 * @param {number} idx2
 */
function swap(arr, idx1, idx2) {
  idx1 -= 1;
  idx2 -= 1;
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * @param {number} arrSize
 * @param {number} caseSize
 * @param {[number, number][]} caseArr
 * @returns {number[]}
 */
function solution(arrSize, caseSize, caseArr) {
  const arr = Array.from({ length: arrSize }, (_, i) => i + 1);
  caseArr.slice(0, caseSize).forEach((elem) => {
    swap(arr, elem[0], elem[1]);
  });
  return arr;
}

console.log(solution(basketSize, basketCaseSize, basketCase).join(" "));

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

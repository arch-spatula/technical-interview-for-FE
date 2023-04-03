const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const a = parseInt(input);

/**
 * @param {number} num
 * @returns {number}
 */
function solution(num) {
  return parseInt((num * (num + 1)) / 2);
}

console.log(solution(a));

module.exports = {
  solution,
};

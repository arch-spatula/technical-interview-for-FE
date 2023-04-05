const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const num = parseInt(input[0]);

/**
 * @param {number} num
 * @returns {string}
 */
function solution(num) {
  return [...Array(num).keys()]
    .map((num, idx, arr) => {
      let star = "*".repeat(num + 1);
      return idx === arr.length - 1 ? star : star + "\n";
    })
    .join("");
}

console.log(solution(num));

module.exports = {
  solution,
};

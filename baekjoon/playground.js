const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]}
 */
function solution(a, b, c) {
  return [
    (a + b) % c,
    ((a % c) + (b % c)) % c,
    (a * b) % c,
    ((a % c) * (b % c)) % c,
  ];
}

solution(a, b, c).forEach((item) => {
  console.log(item);
});

module.exports = {
  solution,
};

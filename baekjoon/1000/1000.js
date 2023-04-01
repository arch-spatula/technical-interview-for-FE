const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

function solution(a, b) {
  return a + b;
}

console.log(a + b);

module.exports = {
  solution,
};

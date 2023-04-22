const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = parseInt(input[0]);
const str = input.slice(1, n + 1);

/**
 * @param {string} str
 * @returns {boolean}
 */
function isGroupWord(str) {
  const memo = {};
  let check = true;
  str.split("").forEach((elem, idx, arr) => {
    // 존재하고 직전과 다르면
    if (memo[elem] && arr[idx - 1] !== elem) {
      check = false;
    }
    // 존재하지 않으면 기록
    if (!memo[elem]) {
      memo[elem] = 1;
    }
  });
  return check;
}

/**
 * @param {string} n
 * @param {string[]} str
 * @returns {number}
 */
function solution(n, str) {
  const arr = str.slice(0, n).filter((elem) => {
    // 이미 등장했던 글자가 다시 등장하면 false
    return isGroupWord(elem);
  });
  return arr.length;
}

console.log(solution(n, str));

module.exports = {
  solution,
  isGroupWord,
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

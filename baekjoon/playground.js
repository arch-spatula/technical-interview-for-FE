const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((str) => parseInt(str));

const t = input[0];
const c = input.slice(1, t + 1);

/**
 * @param {number[]} c
 * @returns {[number, number, number, number][]}
 */
function solution(c) {
  // 거스름돈
  const change = { q: 25, d: 10, n: 5, p: 1 };

  return c.map((num) => {
    let [q, d, n, p] = [0, 0, 0, 0];
    while (num >= change["q"]) {
      num -= change["q"];
      q += 1;
    }
    while (num >= change["d"]) {
      num -= change["d"];
      d += 1;
    }
    while (num >= change["n"]) {
      num -= change["n"];
      n += 1;
    }
    while (num >= change["p"]) {
      num -= change["p"];
      p += 1;
    }
    return [q, d, n, p];
  });
}

solution(c).forEach((arr) => console.log(arr.join(" ")));

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

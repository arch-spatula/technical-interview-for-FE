const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [a, b] = input[0].split(" ").map((item) => parseInt(item));
const c = parseInt(input[1]);

/**
 * @param {number} h
 * @param {number} m
 * @returns {string}
 */
function solution(h, m, t) {
  let minute = m + t;
  let hours = h;
  if (minute >= 60) {
    [hours, minute] = [(hours += parseInt(minute / 60)), minute % 60];
  }
  if (hours >= 24) {
    hours -= 24;
  }

  return `${hours} ${minute}`;
}

console.log(solution(a, b, c));

module.exports = {
  solution,
};

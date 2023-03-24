/**
 *
 * @param {array} box
 * @param {number} n
 * @returns {number}
 */
export function solution(box, n) {
  return box
    .map((num) => Math.floor(num / n))
    .reduce((acc, curr) => acc * curr);
}

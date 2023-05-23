/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1).filter(
    (num) => n % num === 0 && num % 2 !== 0
  ).length;
}

export default solution;

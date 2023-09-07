/**
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, idx) => {
    const [i, j] = [Math.floor((idx + left) / n) + 1, ((idx + left) % n) + 1];
    return Math.max(i, j);
  });
}

export default solution;

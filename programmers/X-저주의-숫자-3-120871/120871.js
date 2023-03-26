/**
 *
 * @param {number} num
 * @returns {boolean}
 */
export function isUseThree(num) {
  if (num % 3 === 0) return true;
  if (num.toString().includes("3")) return true;
  return false;
}

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  return [...Array(200).keys()]
    .map((num) => num + 1)
    .filter((num) => !isUseThree(num))[n - 1];
}

export default solution;

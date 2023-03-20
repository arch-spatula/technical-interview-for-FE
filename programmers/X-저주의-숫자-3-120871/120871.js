/**
 *
 * @param {number} n
 * @returns {boolean}
 */
export function isUseThree(n) {
  if (n % 3 === 0) return true;
  if (n.toString().includes("3")) return true;
  return false;
}

/**
 * @param {number} n
 * @returns {number}
 */
export function solution(n) {
  const arr = [...Array(200).keys()].filter((elem) => !isUseThree(elem));
  return arr[n - 1];
}

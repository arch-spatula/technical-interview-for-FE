/**
 * @param {Number} n
 * @returns {Number}
 */
export function solution(n) {
  function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
  }
  const factorialRange = [...Array(12).keys()].map((item) => factorial(item));

  for (let i = 0; i < 11; i++) {
    if (factorialRange[i] <= n && n < factorialRange[i + 1]) {
      return i;
    }
  }
}

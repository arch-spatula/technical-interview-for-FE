/**
 *
 * @param {Array} array
 * @param {Number} n
 * @returns {Number}
 */
export function solution(array, n) {
  return array.filter((num) => num === n).length;
}

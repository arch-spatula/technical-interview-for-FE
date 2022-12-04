// array	n	result
// [1, 1, 2, 3, 4, 5]	1	2
// [0, 2, 3, 4]	1	0

/**
 *
 * @param {Array} array
 * @param {Number} n
 * @returns {Number}
 */
function solution(array, n) {
  return array.filter((num) => num === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1, 2));
console.log(solution([0, 2, 3, 4], 1, 0));

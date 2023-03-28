/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */
function solution(array, n) {
  let closest = array[0];
  array.forEach((num) => {
    if (Math.abs(num - n) < Math.abs(closest - n)) closest = num;
    if (Math.abs(num - n) === Math.abs(closest - n)) {
      closest = closest > num ? num : closest;
    }
  });
  return closest;
}

export default solution;

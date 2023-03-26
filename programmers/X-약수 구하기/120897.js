/**
 * @param {number} num
 * @returns {array}
 */
function solution(num) {
  return [...Array(num).keys()]
    .map((elem) => elem + 1)
    .filter((elem) => num % elem === 0);
}

export default solution;

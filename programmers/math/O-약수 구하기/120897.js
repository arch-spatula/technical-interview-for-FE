/**
 * @param {number} num
 * @returns {array}
 */
function solution(num) {
  return Array.from({ length: num }, (_, idx) => idx + 1).filter(
    (elem) => num % elem === 0
  );
}

export default solution;

/**
 *
 * @param {string} myString
 * @returns {string}
 */
function solution(myString) {
  return [...new Set(myString)].join("");
}

export default solution;

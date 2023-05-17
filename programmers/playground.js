/**
 * @param {number} q
 * @param {number} r
 * @param {string} code
 * @returns {string}
 */
function solution(q, r, code) {
  let result = "";
  code.split("").forEach((char, idx) => {
    if (idx % q === r) result += char;
  });
  return result;
}

export default solution;

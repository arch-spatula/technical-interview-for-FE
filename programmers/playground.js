/**
 * @param {string} s
 * @returns {boolean}
 */
function solution(s) {
  if (s.length === 4 || 6 === s.length) {
    return s.match(/[0-9]/g).length === s.length;
  }
  return false;
}

export default solution;

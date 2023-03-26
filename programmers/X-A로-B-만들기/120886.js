/**
 *
 * @param {string} before
 * @param {string} after
 * @returns {1 | 0}
 */
function solution(before, after) {
  return [...before.split("")].sort().join("") ===
    [...after.split("")].sort().join("")
    ? 1
    : 0;
}

export default solution;

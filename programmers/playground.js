/**
 * @param {string} str
 * @returns {object}
 */
export function createMemo(str) {
  const memo = {};
  str.split("").forEach((char) => {
    if (!memo[char]) {
      memo[char] = 1;
    } else {
      memo[char] += 1;
    }
  });
  return memo;
}

/**
 * @param {object} newObj
 * @param {object} prevObj
 * @returns {boolean}
 */
export function shallowCompare(newObj, prevObj) {
  for (const key in newObj) {
    if (newObj[key] !== prevObj[key]) return false;
  }
  return true;
}

/**
 * @param {string} before
 * @param {string} after
 * @returns {0 | 1}
 */
export function solution(before, after) {
  return shallowCompare(createMemo(before), createMemo(after)) ? 1 : 0;
}

/**
 * @param {number[]} numLog
 * @returns {string}
 */
function solution(numLog) {
  const map = new Map();
  map.set(1, "w");
  map.set(-1, "s");
  map.set(10, "d");
  map.set(-10, "a");

  let result = "";
  numLog.forEach((num, idx) => {
    if (idx > 0) result += map.get(num - numLog[idx - 1]);
  });
  return result;
}

export default solution;

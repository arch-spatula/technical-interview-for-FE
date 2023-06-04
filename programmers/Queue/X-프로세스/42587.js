/**
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  const queue = [];
  priorities.forEach((priority, idx) => {
    const map = new Map();
    map.set('idx', idx);
    map.set('priority', priority);
    queue.push(map);
  });

  let result = -1;
  return result;
}

export default solution;

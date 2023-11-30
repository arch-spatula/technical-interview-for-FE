/**
 * @param {number} k
 * @param {[number, number][]} dungeons
 * @returns {number}
 */
function solution(k, dungeons) {
  let result = [];
  let depth = 0;
  /**
   * @param {[number, number][]} visited
   * @param {[number, number][]} remaining
   * @param {number} health
   */
  (function graph(visited, remaining, health, depth) {
    // console.log(visited, remaining, health, depth);
    if (!remaining.length) {
      result.push(depth);
      // depth = 0;
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const current = visited.concat(remaining[i]);
      // 진행여부 가드
      // 통과 못하면 초기화
      const [barrier, cost] = remaining[i];
      if (health < barrier) {
        graph(current, [], health - cost, depth);
      } else {
        const nextRemaining = remaining
          .slice(i + 1)
          .concat(remaining.slice(0, i));
        // depth += 1;
        graph(current, nextRemaining, health - cost, depth + 1);
      }
    }
  })([], dungeons, k, 0);
  return Math.max(...result);
}

export default solution;

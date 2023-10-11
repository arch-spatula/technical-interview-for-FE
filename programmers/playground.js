/**
 * @param {number} k
 * @param {[number, number][]} dungeons
 * @returns {number}
 */
function solution(k, dungeons) {
  const sortedDungeons = dungeons.slice().sort((a, b) => {
    const [entryA, costA] = a;
    const [entryB, costB] = b;
    if (entryA / costA > entryB / costB) return 1;
    else return -1;
  });
  let result = 0;
  const sortedDungeonsLength = sortedDungeons.length;
  for (let i = 0; i < sortedDungeonsLength; i++) {
    const currentDungeon = sortedDungeons.pop();
    const [entry, cost] = currentDungeon;
    if (entry > k) break;
    k -= cost;
    result += 1;
  }
  return result;
}

export default solution;

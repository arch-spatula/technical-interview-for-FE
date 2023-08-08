/**
 * @param {number[]} rank
 * @param {boolean[]} attendance
 * @returns {number}
 */
function solution(rank, attendance) {
  const table = rank
    .map((rank, idx) => ({
      rank,
      idx,
      attendance: attendance[idx],
    }))
    .filter((elem) => elem.attendance)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map((elem, idx) => elem.idx * Math.pow(10, 4 - idx * 2))
    .reduce((acc, curr) => acc + curr);
  return table;
}

export default solution;

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns
 */
function solution(arr, k) {
  const set = new Set(arr);
  const result = Array.from({ length: k }, (_, idx) => [...set][idx] ?? -1);
  return result;
}

export default solution;

/**
 * @param {number[][]} arr
 * @returns {number[][]}
 */
function solution(arr) {
  let i = arr.length;
  let j = arr[0].length;

  if (i === j) return arr;
  if (i > j) {
    for (let idx = 0; idx < arr.length; idx++) {
      arr[idx].push(...Array.from({ length: i - j }, () => 0));
    }
    return arr;
  }
  if (j > i) {
    for (let idx = 0; idx < j - i; idx++) {
      arr.push(Array.from({ length: j }, () => 0));
    }
    return arr;
  }
}

export default solution;

/**
 * @param {number} k
 * @param {number[]} score
 * @returns {number}
 */
function solution(k, score) {
  let survivors = [];
  const result = [];

  for (let scoreIdx = 0; scoreIdx < score.length; scoreIdx++) {
    survivors = cutOff(insert(score[scoreIdx], survivors), k);
    result.push(survivors.at(-1));
  }
  return result;
}

/**
 * @param {number} num
 * @param {number[]} arr
 * @returns {number[]}
 */
export function insert(num, arr) {
  const result = arr.slice();
  let insertFlag = false;
  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i]) {
      result.splice(i, 0, num);
      insertFlag = true;
      break;
    }
  }
  if (!insertFlag) result.push(num);

  return result;
}

/**
 * @param {number[]} arr
 * @param {number} maxLength
 * @returns {number[]}
 */
export function cutOff(arr, maxLength) {
  return arr.slice(0, maxLength);
}

export default solution;

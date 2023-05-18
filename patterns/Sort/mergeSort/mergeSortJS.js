/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, median));
  const arrRight = mergeSort(arr.slice(median));
  return merge(arrLeft, arrRight);
}

/**
 * @param {number[]} arrLeft
 * @param {number[]} arrRight
 * @returns {number[]}
 */
export function merge(arrLeft, arrRight) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < arrLeft.length && rightIdx < arrRight.length) {
    if (arrLeft[leftIdx] > arrRight[rightIdx]) {
      result.push(arrRight[rightIdx]);
      rightIdx += 1;
    }
    if (arrLeft[leftIdx] < arrRight[rightIdx]) {
      result.push(arrLeft[leftIdx]);
      leftIdx += 1;
    }
  }

  while (leftIdx < arrLeft.length) {
    result.push(arrLeft[leftIdx]);
    leftIdx += 1;
  }

  while (rightIdx < arrRight.length) {
    result.push(arrRight[rightIdx]);
    rightIdx += 1;
  }

  return result;
}

export default mergeSort;

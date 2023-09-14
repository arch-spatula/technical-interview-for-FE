/**
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns {number[][]}
 */
function solution(arr1, arr2) {
  const result = [];
  const i = arr1.length;
  const j = arr2[0].length;

  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      row.push(multiply(extractRow(arr1, i), extractCol(arr2, j)));
    }
    result.push(row);
  }

  return result;
}

/**
 * @param {number[][]} arr
 * @param {number} idx
 * @returns {number[]}
 */
function extractRow(arr, idx) {
  return arr[idx];
}

/**
 * @param {number[][]} arr
 * @param {number} idx
 * @returns {number[]}
 */
function extractCol(arr, idx) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][idx]);
  }
  return result;
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
function multiply(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr2[i];
  }
  return sum;
}

export default solution;

export { extractCol, extractRow, multiply };

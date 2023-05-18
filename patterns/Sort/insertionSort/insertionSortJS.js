/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
  let window = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let pointer = arr[i];
    window = insert(window, pointer);
  }
  return window;
}

/**
 * @param {number[]} arr
 * @param {number[]} num
 */
export function insert(arr, num) {
  arr.push(Infinity);
  const result = [];
  let compareFlag = true;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i] && compareFlag) {
      result.push(num);
      compareFlag = false;
    }
    result.push(arr[i]);
  }
  result.pop();
  return result;
}

export default insertionSort;

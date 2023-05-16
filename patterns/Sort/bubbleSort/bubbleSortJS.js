function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubbleSort(arr) {
  let swapFlag = true;
  while (swapFlag) {
    swapFlag = false;
    let swapIdx = 0;
    let swapPointer = arr[swapIdx];
    for (let i = 0; i < arr.length; i++) {
      let loopPointer = arr[i];
      if (swapPointer > loopPointer) {
        swap(arr, i, swapIdx);
        swapIdx = i;
        swapFlag = true;
      } else if (loopPointer > swapPointer) {
        swapPointer = loopPointer;
        swapIdx = i;
      }
    }
  }
  return arr;
}

export default bubbleSort;

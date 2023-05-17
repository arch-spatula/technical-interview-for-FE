/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {
  let swapIdx = null;
  let swapVal = null;
  for (let i = 0; i < arr.length - 1; i++) {
    swapIdx = i;
    swapVal = arr[i];
    //
    let selectIdx = null;
    let selectVal = null;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < selectVal && selectVal !== null) {
        selectVal = arr[j];
        selectIdx = j;
      }
      if (arr[j] < swapVal && selectVal === null) {
        selectIdx = j;
        selectVal = arr[j];
      }
    }
    if (selectVal !== null) swap(arr, swapIdx, selectIdx);
  }
  return arr;

  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}

export default selectionSort;

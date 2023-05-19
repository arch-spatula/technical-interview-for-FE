/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);

  /**
   * @param {number[]} arr
   * @param {number} target
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  function search(arr, target, start, end) {
    if (start === end) return -1;
    let median = Math.round((start + end) / 2);
    if (target === arr[median]) return median;
    if (target < arr[median]) return search(arr, target, start, median);
    if (target > arr[median]) return search(arr, target, median, end);
  }
}

export default binarySearch;

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const pivotPoint = arr[median];

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === median) continue;
    const loopPoint = arr[i];
    if (loopPoint < pivotPoint) {
      left.push(loopPoint);
    } else {
      right.push(loopPoint);
    }
  }
  return [...quickSort(left), pivotPoint, ...quickSort(right)];
}
export default quickSort;

/**
 *
 * @param {array} arrLeft
 * @param {array} arrRight
 * @returns {array}
 */
function solution(arrLeft, arrRight) {
  const mergedArray = [];
  for (let i = 0, j = 0; i < arrLeft.length || j < arrRight.length; ) {
    if (arrLeft[i] < arrRight[j]) {
      mergedArray.push(arrLeft[i]);
      i++;
    } else {
      mergedArray.push(arrRight[j]);
      j++;
    }
  }
  return mergedArray;
}

console.log(
  solution([1, 10, 50], [2, 14, 99, 100]),
  [1, 2, 10, 14, 50, 99, 100]
);

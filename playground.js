const arr = [1, 2, 3];

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function addNum(arr, add = 0) {
  arr.push(add);
  return arr;
}

console.log(addNum(arr, 4)); // [1, 2, 3]
console.log(addNum(arr, 5)); // [1, 2, 3]
console.log(addNum(arr, 6)); // [1, 2, 3]

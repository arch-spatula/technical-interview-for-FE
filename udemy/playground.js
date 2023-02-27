/**
 * @param {array} arr
 * @param {number} num
 * @returns {number}
 */
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

// function linearSearch(arr, num) {
//   return arr.indexOf(num);
// }

console.log(
  fib(4), // 3
  fib(10), // 55
  fib(28), // 317811
  fib(35) // 9227465
);

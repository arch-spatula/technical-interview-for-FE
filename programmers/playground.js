/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  const queue = [];
  arr.forEach((num, idx, arr) => {
    const cache = arr[idx - 1];
    if (num !== cache) queue.push(num);
  });
  return queue;
}

export default solution;

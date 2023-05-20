/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  const result = [];
  let twoFlag = false;
  const twoStack = [];

  let cacheTwo = [];
  arr.forEach((num) => {
    cacheTwo.push(num);
    if (num === 2) {
      twoStack.push(...cacheTwo);
      cacheTwo = [];
    }
  });
  twoStack.forEach((num) => {
    if (num === 2) twoFlag = true;
    if (twoFlag) result.push(num);
  });

  if (result.length === 0) result.push(-1);

  return result;
}

export default solution;

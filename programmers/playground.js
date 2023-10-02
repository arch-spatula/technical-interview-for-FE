/**
 * @param {number[]} common
 * @returns {number}
 */
function solution(common) {
  let result = null;
  const [first, second, third] = common;
  const firstDiff = second - first;
  const secondDiff = third - second;

  if (firstDiff === secondDiff) {
    // 등차수열
    result = first + firstDiff * common.length;
  } else {
    // 등비수열
    result = first * Math.pow(second / first, common.length);
  }

  return result;
}

export default solution;

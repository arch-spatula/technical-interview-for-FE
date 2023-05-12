/**
 * @param {number[]} arr
 * @returns {number}
 */
function solution(arr) {
  let result = 0;
  let latestArr = [];
  let mappedArr = [...arr];
  while (true) {
    mappedArr = mappedArr.map(transform);
    if (mappedArr.every((num, idx) => num === latestArr[idx])) {
      break;
    } else {
      latestArr = mappedArr;
    }
    result += 1;
  }
  return result;

  function transform(num) {
    switch (true) {
      case num >= 50 && num % 2 === 0:
        return num / 2;
      case num < 50 && num % 2 !== 0:
        return num * 2 + 1;
      default:
        return num;
    }
  }
}

export default solution;

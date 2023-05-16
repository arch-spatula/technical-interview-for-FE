/**
 * @param {string[]} strArr
 * @returns {number}
 */
function solution(strArr) {
  const map = new Map();
  strArr.forEach((str) => {
    if (!map.get(str.length)) map.set(str.length, [str]);
    else map.set(str.length, [...map.get(str.length), str]);
  });
  let groupSize = 0;
  map.forEach((arr, key) => {
    if (arr.length >= groupSize) {
      groupSize = arr.length;
    }
  });
  return groupSize;
}

export default solution;

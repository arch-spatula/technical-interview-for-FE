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
  let groupIdx = 0;
  map.forEach((arr, key) => {
    if (groupIdx < arr.length) groupIdx = arr.length;
  });
  return map.get(groupIdx).length;
}

export default solution;

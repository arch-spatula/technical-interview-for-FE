/**
 * @param {[string, string][]} clothes
 * @returns {number}
 */
function solution(clothes) {
  const map = new Map();

  clothes.forEach((clothe) => {
    const key = clothe[1];
    const val = clothe[0];
    map.get(key) ? map.set(key, [...map.get(key), val]) : map.set(key, [val]);
  });

  console.log(map.keys());
  /**
   * @param {Map} map
   * @return {number}
   */
  const combination = (map) => {
    map.keys();
  };

  // 조합
  // 키의 개수로 조합
  return map.size;
}

export default solution;

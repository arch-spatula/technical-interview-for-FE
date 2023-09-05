/**
 * @param {number[]} elements
 * @returns {number}
 */
function solution(elements) {
  const result = new Set();
  let windowSize = 1;
  while (windowSize <= elements.length) {
    for (let i = 0; i < elements.length; i++) {
      result.add(sumWindow(i, windowSize, elements));
    }
    windowSize += 1;
  }

  return result.size;
}

/**
 * @param {number} idx
 * @param {number} size
 * @param {number[]} arr
 * @returns {number}
 */
export function sumWindow(idx, size, arr) {
  const result = [...arr, ...arr];
  return result.slice(idx, idx + size).reduce((acc, curr) => acc + curr);
}

export default solution;

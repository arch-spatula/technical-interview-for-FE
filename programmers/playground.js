/**
 * @param {number[]} numbers
 * @param {number} k
 * @returns {number}
 */
function solution(numbers, k) {
  let answer = 0;
  for (let i = 0; i / 2 < k; i += 2) {
    answer = numbers[i % numbers.length];
  }
  return answer;
}

export default solution;

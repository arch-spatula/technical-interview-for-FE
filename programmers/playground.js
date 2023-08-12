/**
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);
  while (0 < people.length) {
    const first = people.pop();
    if (people.at(-1) <= limit - first) people.pop();
    count += 1;
  }
  return count;
}
export default solution;

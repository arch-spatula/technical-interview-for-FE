/**
 * @param {number[]} array,
 * @param {[number, number, number][]} commands
 * @returns {number[]}
 */
function solution(array, commands) {
  const result = [];
  commands.forEach((elem) => {
    const [i, j, k] = elem;

    result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  });
  return result;
}

export default solution;

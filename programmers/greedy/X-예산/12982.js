/**
 * @param {number[]} d
 * @param {number} budget
 * @returns {number}
 */
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;

    budget -= d[i];
    count += 1;
  }
  return count;
}

function getCombinations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

export { solution };

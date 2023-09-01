/**
 * @param {string[]} name
 * @param {number[]} yearning
 * @param {string[][]} photo
 * @returns {number[]}
 */
function solution(name, yearning, photo) {
  const memo = new Map();
  name.forEach((name, idx) => {
    memo.set(name, yearning[idx]);
  });

  return photo.map((elem) => {
    return elem.reduce((acc, curr) => acc + (memo.get(curr) ?? 0), 0);
  });
}

export default solution;

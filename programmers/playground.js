/**
 * @param {string} s
 * @returns {number[]}
 */
function solution(s) {
  /** @type {string[]} */
  let parsedTuple = [];
  let pushFlag = false;
  for (let i = 0; i < s.slice(1, s.length - 1).length; i++) {
    if (s[i] === '{') {
      pushFlag = true;
      parsedTuple.push('');
      continue;
    }
    if (s[i] === '}') {
      pushFlag = false;
      continue;
    }
    if (pushFlag) parsedTuple[parsedTuple.length - 1] += s[i];
  }

  parsedTuple = parsedTuple
    .map((char) => char.split(',').map((char) => parseInt(char)))
    .slice(1)
    .sort((a, b) => a.length - b.length);

  let prev = [];
  const result = Array.from({ length: parsedTuple.length }, (_, idx) => {
    const foo = parsedTuple[idx].filter((elem) => !prev.includes(elem));
    prev = parsedTuple[idx];
    return foo[0];
  });

  return result;
}

export default solution;

/**
 * @param {string} s
 * @returns {[number, number]}
 */
function solution(s) {
  let zeroCount = 0;
  let processCount = 0;
  let char = s;
  while (char !== "1") {
    const [binary, count] = process(char);
    char = binary;
    zeroCount += count;
    processCount += 1;
  }
  return [processCount, zeroCount];
}

export function process(s) {
  let zeroCount = 0;
  return [
    s
      .split("")
      .filter((char) => {
        if (char === "0") zeroCount += 1;
        return char === "1";
      })
      .join("")
      .length.toString(2),
    zeroCount,
  ];
}

export default solution;

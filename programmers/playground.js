/**
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
  let result = "";
  s.split("").forEach((char, idx) => {
    if (idx === 0 || s[idx - 1] === " ") {
      if (Number.isNaN(parseInt(char))) result += char.toUpperCase();
      else result += char.toLowerCase();
    } else result += char.toLowerCase();
  });
  return result;
}

export default solution;

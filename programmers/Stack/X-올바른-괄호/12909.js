/**
 * @param {string} s
 * @returns {boolean}
 */
function solution(s) {
  let result = true;
  const stack = [];
  s.split("").forEach((char) => {
    // push (
    if (char === "(") {
      stack.push(char);
    }
    // pop )
    if (char === ")") {
      if (stack.pop(char) !== "(") result = false;
    }
  });
  if (stack.length > 0) result = false;
  return result;
}

export default solution;

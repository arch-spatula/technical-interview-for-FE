/**
 * @typedef {"["|"]"|"{"|"}"|"("|")"} BracketType
 * @param {`${BracketType}`} s
 * @returns {number}
 */
function solution(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const brackets = [...s.split(''), ...s.split('')];
    if (isCorrect(brackets.slice(i, i + s.length))) result += 1;
  }
  return result;
}

/**
 * @param {("["|"]"|"{"|"}"|"("|")")[]} s
 * @returns {boolean}
 */
export function isCorrect(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (
      isPare(stack, '(', ')') ||
      isPare(stack, '[', ']') ||
      isPare(stack, '{', '}')
    ) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

/**
 * @param {("["|"]"|"{"|"}"|"("|")")[]} s
 * @param {("["|"]"|"{"|"}"|"("|")")} left
 * @param {("["|"]"|"{"|"}"|"("|")")} right
 * @returns {boolean}
 */
function isPare(arr, left, right) {
  return arr.at(-2) === left && arr.at(-1) === right;
}

export default solution;

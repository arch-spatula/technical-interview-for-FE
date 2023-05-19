/**
 * @param {">" | "<"} ineq
 * @param {"!" | "="} eq
 * @param {number} n
 * @param {number} m
 * @returns {1 | 0}
 */
function solution(ineq, eq, n, m) {
  let result = `${n}`;
  switch (ineq) {
    case "<":
      result += "<";
      break;
    case ">":
      result += ">";
  }
  switch (eq) {
    case "!":
      result += "";
      break;
    case "=":
      result += "=";
  }
  result += `${m}`;

  return eval(result) ? 1 : 0;
}

export default solution;

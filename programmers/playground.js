/**
 *
 * @param {string} myString
 * @returns {number}
 */
export function solution(myString) {
  var regex = /[^0-9]/g;
  var result = myString.replace(regex, "");
  return result
    .split("")
    .map((str) => parseInt(str))
    .reduce((acc, curr) => acc + curr);
}

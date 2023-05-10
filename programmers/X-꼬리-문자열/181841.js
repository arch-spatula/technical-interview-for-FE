/**
 * @param {string[]} str_list
 * @param {string} ex
 * @returns {string}
 */
function solution(str_list, ex) {
  return str_list.filter((str) => !str.endsWith(ex)).join("");
}

export default solution;

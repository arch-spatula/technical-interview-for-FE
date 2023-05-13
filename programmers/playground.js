/**
 * @param {[number, number, number]} date1
 * @param {[number, number, number]} date2
 * @returns {0 | 1}
 */
function solution(date1, date2) {
  for (let i = 0; i < 3; i++) {
    if (date1[i] < date2[i]) return 1;
    else if (date1[i] > date2[i]) return 0;
  }
  return 0;
}

export default solution;

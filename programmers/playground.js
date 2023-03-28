/**
 * @param {string} bin1
 * @param {string} bin2
 * @returns {string}
 */
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

export default solution;

/**
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * @param {number[]} citations
 * @returns {number}
 */
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  var i = 0;
  while (i + 1 <= citations[i]) i++;
  return i;
}

export default solution;

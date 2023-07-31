/**
 * @param {string} s
 * @param {number} n
 * @returns {string}
 */
function solution(s, n) {
  // 스트림처리
  const result = s
    .split('')
    .map((char) => {
      if (char === ' ') return ' ';
      // 대소문자 구분
      if (char.toUpperCase() === char) {
        // 아스키코드 인덱스 접근하기
        // n만큼 이동하기
        // 범위 확인
        if (
          char.charCodeAt() + n - 'A'.charCodeAt() >
          'Z'.charCodeAt() - 'A'.charCodeAt()
        )
          return String.fromCharCode(char.charCodeAt() + n - 26);
        else return String.fromCharCode(char.charCodeAt() + n);
      } else {
        // 아스키코드 인덱스 접근하기
        if (
          char.charCodeAt() + n - 'a'.charCodeAt() >
          'z'.charCodeAt() - 'a'.charCodeAt()
        )
          return String.fromCharCode(char.charCodeAt() + n - 26);
        else return String.fromCharCode(char.charCodeAt() + n);
      }
    })
    .join('');
  return result;
}

export default solution;

/**
 * @param {number} brown
 * @param {number} yellow
 * @returns {[number, number]}
 */
function solution(brown, yellow) {
  // 노랑의 약수 배열을 구함
  const divisors = Array.from({ length: yellow }, (_, idx) => idx + 1).filter(
    (num) => yellow % num === 0
  );

  // 양끝 투포인터 준비
  if (divisors.length % 2 !== 0) {
    let sqrtVal = 0;
    let sqrtIdx = 0;
    // 동일한 제곱값 하나더 추가
    divisors.forEach((num, idx) => {
      if (num ** 2 === yellow) {
        sqrtVal = num;
        sqrtIdx = idx;
      }
    });
    divisors.splice(sqrtIdx, 0, sqrtVal);
  }

  // 노랑의 가로 >= 노랑의 세로 동안(while)
  for (let i = 0; i < divisors.length / 2; i++) {
    const width = divisors[divisors.length - i - 1];
    const hight = divisors[i];
    // 박스배열의 변 + 꼭지점 개수 갈색과 비교
    if ((width + hight) * 2 + 4 === brown) {
      // 일치하면 갈색 포함해서 가로 새로값 정답
      return [width + 2, hight + 2];
    }
  }
}

export default solution;

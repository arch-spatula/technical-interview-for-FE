/**
 * @param {[string, string][]} clothes
 * @returns {number}
 */
function solution(clothes) {
  let result = 1;
  const memo = new Map();
  clothes.forEach(([name, kind]) => {
    if (!memo.get(kind)) memo.set(kind, [name]);
    else memo.set(kind, [...memo.get(kind), name]);
  });
  // 아래가 어려웠습니다.
  for (const item of memo.values()) {
    result *= item.length + 1;
  }
  // 1종류 1개
  // nC1 + nC1 ...
  // 2종류 1개
  // nC1 * nC1 +
  // 3종류 1개
  // 4종류 1개 ...
  return result - 1;
}

export default solution;

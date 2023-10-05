/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
function solution(str1, str2) {
  // 모두 소문자 처리
  // 2개 쪼개기
  const leftList = splitByTwo(str1.toUpperCase());
  const rightList = splitByTwo(str2.toUpperCase());

  // 교집합
  const intersectionSet = getIntersection(leftList, rightList);

  // 합집합
  const unionSet = getUnion(leftList, rightList);

  // 분모 사이즈 0대응하기
  if (unionSet.length === 0) return 65536;
  return parseInt((intersectionSet.length / unionSet.length) * 65536);
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function splitByTwo(str) {
  const result = [];
  for (let i = 0; i < str.length - 1; i += 1) {
    const item = str.slice(i, i + 2);
    // 공백이나 숫자, 특수 문자 -> 문나열만 해당하는 정규표현식
    if (/^[a-zA-Z]+$/.test(item)) result.push(item);
  }
  return result;
}

/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @returns {string[]}
 */
function getIntersection(set1, set2) {
  // 빈도수 카운터
  /** @type {Map<string, {left: number, right: number}>} */
  const memo = new Map();
  set1.forEach((elem) => {
    const pointer = memo.get(elem);
    if (pointer)
      memo.set(elem, { ...pointer, left: pointer.left + 1, right: 0 });
    else memo.set(elem, { ...pointer, left: 1, right: 0 });
  });
  set2.forEach((elem) => {
    const pointer = memo.get(elem);
    if (pointer) memo.set(elem, { ...pointer, right: pointer.right + 1 });
    else memo.set(elem, { ...pointer, right: 1 });
  });
  const result = [];
  memo.forEach((value, key) => {
    const left = value.left;
    const right = value.right;
    if (left > right) result.push(...Array.from({ length: right }, () => key));
    else result.push(...Array.from({ length: left }, () => key));
  });

  return result;
}

/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @returns {string[]}
 */
function getUnion(set1, set2) {
  // 빈도수 카운터
  /** @type {Map<string, {left: number, right: number}>} */
  const memo = new Map();
  set1.forEach((elem) => {
    const pointer = memo.get(elem);
    if (pointer)
      memo.set(elem, { ...pointer, left: pointer.left + 1, right: 0 });
    else memo.set(elem, { ...pointer, left: 1, right: 0 });
  });
  set2.forEach((elem) => {
    let pointer = memo.get(elem);
    if (!pointer || !pointer.left) memo.set(elem, { ...pointer, left: 0 });
    pointer = memo.get(elem);
    if (pointer.right) memo.set(elem, { ...pointer, right: pointer.right + 1 });
    else memo.set(elem, { ...pointer, right: 1 });
  });

  const result = [];
  memo.forEach((value, key) => {
    const left = value.left;
    const right = value.right;
    if (left < right) result.push(...Array.from({ length: right }, () => key));
    else result.push(...Array.from({ length: left }, () => key));
  });
  return result;
}

export default solution;

export { getUnion, getIntersection, splitByTwo };

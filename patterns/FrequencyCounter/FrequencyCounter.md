https://school.programmers.co.kr/learn/courses/30/lessons/120896

```js
/**
 *
 * @param {String} s 문자열을 받습니다.
 * @returns {String} 중복이 없고 정렬된 문자열을 반환합니다.
 */
function solution(s) {
  // 등장횟수를 기록합니다.
  const obj = {};
  [...s].forEach((letter) => {
    if (obj[letter]) obj[letter] += 1;
    else obj[letter] = 1;
  });

  const answer = [];
  for (const key in obj) {
    if (obj[key] == 1) answer.push(key);
  }

  return answer.sort().join("");
}

console.log(solution("abcabcadc"), "d");
console.log(solution("abdc"), "abcd");
console.log(solution("hello"), "eho");
console.log(solution("hheelloo"), "");
```

이런 문제에서 obj에 등장을 기록하는 패턴입니다. 즉 캐시 혹은 memo를 활용해서 문제 풀이를 접근하는 방식입니다.

```js
function solution(n) {
  const current = getBinaryOnes(n);
  while (true) {
    n += 1;
    if (current === getBinaryOnes(n)) return n;
  }
  // while
  // n += 1
  // binary = n -> 2진수 변환
  // next = binary.filter("1").langth
  // if (count === next) return n
  return current;
}

function getBinaryOnes(n) {
  return n
    .toString(2)
    .split('')
    .filter((num) => num === '1').length;
}
```

풀이: 2023.07.27.

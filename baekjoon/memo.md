## 주석처리 템플릿

```js
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [num, arr] = [
  parseInt(input[0]),
  input[1].split(' ').map((str) => parseInt(str)),
];

/**
 * @param {number} num
 * @param {number[]} arr
 * @returns {[number, number]}
 */
function solution(num, arr) {
  return [Math.min(...arr.slice(0, num)), Math.max(...arr.slice(0, num))];
}

console.log(solution(num, arr).join(' '));

module.exports = {
  solution,
};

// --------------------------------------------------------------------------

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const answer = [];
// rl.on("line", (line) => {
//   const [A, B] = line.split(" ").map((str) => +str);
//   try {
//     answer.push(A + B);
//   } catch (error) {
//     rl.close();
//   }
// }).on("close", () => {
//   answer.forEach((num) => console.log(num));
//   process.exit();
// });
```

입력받는 숫자가 무작위일 때는 아래 주석을 풀고 위를 걸어두세요

## 일반적인 경우

```js
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
```

## input 여러개

```js
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((str) => str.split(' ').map((elem) => parseInt(elem)));

/**
 * @param {string} me
 * @param {string} doctor
 * @returns {"go" | "no"}
 */
function solution(left, right) {
  return null;
}

for (let i = 0; i < input.length; i++) {
  const left = input[i][0];
  const right = input[i][1];
  if (left === 0 && right === 0) break;
  console.log(solution(left, right));
}
```

## 문자열 출력

```js
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [me, doctor] = fs.readFileSync(filePath).toString().split('\n');

/**
 * @param {string} me
 * @param {string} doctor
 * @returns {"go" | "no"}
 */
function solution(me, doctor) {
  return null;
}

console.log('       _.-;;-._');
console.log("'-..-'|   ||   |");
console.log("'-..-'|_.-;;-._|");
console.log("'-..-'|   ||   |");
console.log("'-..-'|_.-''-._|");
```

위처럼 사용해서 풀이합니다. 테스트는 실패해도 출력을 화면상 보면서 처리하면 쉽습니다.

## readline

https://www.acmicpc.net/board/view/22716

가끔은 시스템에서 입력을 받는 자료가 많을 때가 있습니다.

```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (line) => {
  const input = line.split(' ');

  if (input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A + B + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

# 런타임 에러

https://help.acmicpc.net/judge/rte

가끔 서버 권한문제가 나올 때가 있습니다.

---

# 부조리

https://www.acmicpc.net/problem/10926

이 문제는 부조리해서 작성합니다.

자료를 받을 때 어떤 자료가 주어지는지 대략 가늠도 못합니다.

```js
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(`${input}\?\?\!`);
```

# 지금 풀고 있는 문제

https://www.acmicpc.net/problem/3003

# 풀어야 할 문제

요세푸스 문제

https://www.acmicpc.net/problem/1158

스택 수열
https://www.acmicpc.net/problem/1874

```py
def stack_sequence(n, sequence):
    # 이 곳을 채워보세요!

sequence = list()
n = int(input())
for _ in range(n):
    sequence.append(int(input()))
stack_sequence(n, sequence)
```

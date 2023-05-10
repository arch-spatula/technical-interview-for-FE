임시저장

```js
import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("배포마다 몇 개의 기능이 배포되는지를 return", () => {
  test("예제 1", () => {
    expect(solution("ihrhbakrfpndopljhygc", 4, 2)).toBe("happy");
  });

  test("예제 2", () => {
    expect(solution("programmers", 1, 1)).toBe("programmers");
  });
});
```

```js
/**
 * @param {string} my_string
 * @param {number} m
 * @param {number} c
 * @returns {string}
 */
function solution(my_string, m, c) {
  return my_string
    .split("")
    .filter((_, idx) => idx % m === c - 1)
    .join("");
}

export default solution;
```

---

[약수의 개수와 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/77884/solution_groups?language=javascript)

```js
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```

다시 풀 필요는 없지만 제곱근이 정수면 약수는 홀수라는 점을 활용해서 풀이했습니다.

[부족한 금액 계산하기](https://school.programmers.co.kr/learn/courses/30/lessons/82612/solution_groups?language=javascript)

```js
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
```

가우스 공식 활용하기

# 앞으로 진도

[피자 나눠 먹기 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120815)

[피자 나눠 먹기 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120814)

# 정리 중

[프로그래머스 모든 문제 풀이](https://github.com/codeisneverodd/programmers-coding-test)

[주식가격](https://school.programmers.co.kr/learn/courses/30/lessons/42584)

```py
from collections import deque

def solution(prices):
    # 이 부분을 채워주세요!

    return

prices = list(map(int, input().split()))
print(solution(prices))

print("정답 = [2, 1, 2, 1, 0] / 현재 풀이 값 = ",solution([6,9,5,7,4]))
print("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ",solution([3,9,9,3,5,7,2]))
print("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ",solution([1,5,3,6,7,6,5]))
```

폴더 이름 앞에 O가 붙으면 더이상 풀 필요가 없는 문제입니다. X가 붙어있으면 다시 풀어봐야할 문제입니다.

(복습필요여부)-(이름-띄어쓰기)&(링크id)

# 짝수의 합

[짝수의 합](https://school.programmers.co.kr/learn/courses/30/lessons/120831)

풀이: 2022.11.15.

```py
def solution(n):
    return sum(list(filter(lambda x : x % 2 == 0, [even for even in range(n+1)])))
```

피드백

1. 검색을 했습니다.
   - `filter`를 사용하고 싶으면 list안에 넣어야 합니다.
   - `filter` 첫번째 인자는 함수 두번째 인자는 참조형 자료를 넣습니다.
   - `filter`의 첫번째 인자는 부울리안 값을 반환하는 람다함수입니다. `True`이면 남기고 `False`이면 제거합니다.

# 중복된 숫자 개수

[중복된 숫자 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120583)

풀이: 2022.11.15.

```py
def solution(array: list, n: int) -> int:
    answer = 0
    for num in array:
        if num == n: answer += 1
    return answer
```

```py
def solution(array: list, n: int) -> int:
    return array.count(n)
```

피드백

1. 선지를 잘 안 읽는다. 동저계획법을 안 사용하고 풀 수 있는데 꼭 굳이 활용하려고 했습니다.
2. `count` 메서드를 활용해서 몇개 존재하는지 간단하게 확인합니다. `in` 연산자를 활용하는 것보다 코드가 간략합니다.

# 배열의 유사도

[배열의 유사도](https://school.programmers.co.kr/learn/courses/30/lessons/120903)

풀이: 2022.11.16.

```py
def solution(s1: list, s2: list) -> int:
    # 초깃값 설정
    result = 0
    # 첫번째 배열을 순회합니다.
    for col in s1:
        # 두번째 배열을 순회합니다.
        for row in s2:
            # 첫번째 배열의 원소와 두번째 배열의 원소가 일치하면 초깃값에 1을 더합니다.
            if col == row: result += 1
    return result
```

```py
def solution(s1, s2):
    return len(set(s1)&set(s2))
```

# 순서쌍의 개수

[순서쌍의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120836)

풀이: 2022.11.16.

```py
def solution(n: int) -> int:
    # 합성수의 구성 요소를 구합니다.
    collection = []
    for num in range(1, n+1):
        # 나누어질 수 있으면 그 수는 합성수입니다.
        if n % num == 0: collection.append(num)
    print(collection)

    # 합성수 중 2개만 곱해서 n을 구할 수 있으면 기록합니다.
    result = 0
    for col in collection:
        for row in collection:
            if col * row == n: result += 1
    return result
```

저의 정답입니다.

```py
def solution(n):
    return len([number for number in range(1, n+1) if n%number == 0])
```

참고해야 할 자료입니다.

[python lists comprehension](https://www.w3schools.com/python/python_lists_comprehension.asp)

# 삼총사

[삼총사](https://school.programmers.co.kr/learn/courses/30/lessons/131705)

풀이: 2022.11.17.

```py
from itertools import combinations

# 3 ≤ len(number) ≤ 13
# min(number) = -1000, max(number) = 1000
def solution(numbers: list) -> int:
    '''
    3개의 정수를 뽑아 더해서 0이 되는 경우의 수를 구사시오.
    '''
    result = 0
    for combo in list(combinations(numbers, 3)):
        if sum(combo) == 0: result += 1
    # 배열 중  원소 1개를 뽑고 순회합니다.
    # 뽑혀있는 배열에서 원소 1개를 또 뽑습니다.
    # 뽑혀있는 배열에서 원소 1개를 또 뽑습니다.

    # 3개의 정수를 뽑습니다.
    # 더합니다.
    # 해당하면 기록합니다.
    return result

# print(solution([-2, 3, 0, 2, -5]), 2)
# print(solution([-3, -2, -1, 0, 1, 2, 3]), 5)
# print(solution([-1, 1, -1, 1]), 0)
```

검색과 `combinations`에 의존해서 풀었습니다.

검색어: 파이썬 배열 조합

[파이썬 (Python)에서 리스트에 있는 값들의 모든 조합을 구하기](https://ourcstory.tistory.com/414)

```py

```

# 한 번만 등장한 문자

[한 번만 등장한 문자](https://school.programmers.co.kr/learn/courses/30/lessons/120896)

풀이: 2022.11.17.

```py
def solution(s: str) -> str:
    memo = {}

    # 1번 초과 등장을 기록
    for letter in s:
        # 존재하면
        if letter in memo: memo[letter] += 1
        # 존재하지 않으면
        else: memo[letter] = 1

    # 1번만 등장하는 문자열을 기록합니다.
    answer = []
    for key in memo.keys():
        if memo[key] == 1: answer.append(key)
    answer.sort()
    return ''.join(answer)

print(solution("abcabcadc"), "d")
print(solution("abdc"), "abcd")
print(solution("hello"), "eho")
print(solution("hheelloo"), "")
```

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

# 숨어있는 숫자의 덧셈 (1)

[숨어있는 숫자의 덧셈 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120851)

```js
/**
 *
 * @param {string} myString
 * @returns {number}
 */
export function solution(myString) {
  var regex = /[^0-9]/g;
  var result = myString.replace(regex, "");
  return result
    .split("")
    .map((str) => parseInt(str))
    .reduce((acc, curr) => acc + curr);
}
```

```js
import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("안의 모든 자연수들의 합을 return하도록 solution 함수를 구현합니다.", () => {
  test("'aAb1B2cC34oOp'안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.", () => {
    expect(solution("aAb1B2cC34oOp")).toBe(10);
  });
  test("'1a2b3c4d123Z'안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.", () => {
    expect(solution("1a2b3c4d123")).toBe(16);
  });
});
```

# 369게임

풀이: 2022.12.05.

[369게임](https://school.programmers.co.kr/learn/courses/30/lessons/120891)

```js
function solution(order) {
  return order
    .toString()
    .split("")
    .map((num) => Number(num))
    .filter((num) => num % 3 === 0 && num !== 0).length;
}
```

```js
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
```

정규 표현식을 배우도록 합니다. 고차함수로 풀면 엣지케이스를 잘 처리할 수 없습니다. 0은 어느 숫자로도 나누어 떨어진 숫자입니다. 이런 경우를 고려하지 않기 위해 특정 문자열의 존재여부는 단순하게 판단하는 정규표현식더 효율적입니다. 코드 가독성도 더 우월합니다.

# 2차원으로 만들기

풀이: 2022.12.06.

[2차원으로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120842)

```js
/**
 * @param {Array} num_list
 * @param {Number} n
 * @returns {Array}
 */
function solution(num_list, n) {
  const column = [];
  let row = [];
  let count = 0;

  // n 번째 원소마다
  num_list.forEach((num) => {
    count += 1;
    row.push(num);
    if (count === n) {
      column.push(row);
      count = 0;
      row = [];
    }
  });

  return column;
}
```

커스텀 `splice` 만들지 맙시다.

```js
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
```

# 캐릭터의 좌표

풀이: 2022.12.07.

[캐릭터의 좌표](https://school.programmers.co.kr/learn/courses/30/lessons/120861)

```js
/**
 *
 * @param {Array} keyinput: 모든 원소는 문자열입니다.
 * @param {Array} board: 모든 원소는 Number입니다.
 * @returns {Array}
 */
function solution(keyinput, board) {
  const location = [0, 0];
  const [edgeX, edgeY] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
  // [0, 0]에서 시작합니다. [x, y]로 움직이고 x는 좌우 y는 상하이동합니다.
  // 모서리 +-(board - 1)/2 보다 클수 없습니다. 범위를 초과하면 명령을 취소합니다.
  keyinput.forEach((move) => {
    if (move === "left") {
      location[0] -= 1;
      if (-edgeX > location[0] || location[0] > edgeX) location[0] += 1;
    } else if (move === "right") {
      location[0] += 1;
      if (-edgeX > location[0] || location[0] > edgeX) location[0] -= 1;
    } else if (move === "up") {
      location[1] += 1;
      if (-edgeY > location[1] || location[1] > edgeY) location[1] -= 1;
    } else {
      location[1] -= 1;
      if (-edgeY > location[1] || location[1] > edgeY) location[1] += 1;
    }
  });
  return location;
```

```js
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
```

# 겹치는 선분의 길이

[겹치는 선분의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120876)

풀이: 2022.12.09.

시간 초과, 검색사용

```js
/**
 * @param {Array} lines 3x2 행열입니다.
 * @returns {Array}
 */
function solution(lines) {
  const start = Math.min(...lines.flat());
  const end = Math.max(...lines.flat());

  const memo = {};
  range([start, end]).forEach((elem, idx) => {
    memo[elem] = 0;
  });

  lines.forEach((arr) => {
    range(arr).forEach((elem) => {
      memo[elem] += 1;
    });
  });

  return Object.keys(
    Object.fromEntries(Object.entries(memo).filter(([key, value]) => value > 1))
  ).length;
}

function range(arr) {
  return [...Array(arr[1] - arr[0]).keys()].map((elem) => elem + arr[0]);
}
```

[[Javascript] 배열 중복 값 개수 구하기](https://hianna.tistory.com/459)

```js
const arr = ["a", "b", "a", "b", "c"];

const result = {};
arr.forEach((x) => {
  result[x] = (result[x] || 0) + 1;
});
console.log(result); // {"a":2,"b":2,"c":1}
```

[JavaScript: filter() for Objects](https://stackoverflow.com/questions/5072136/javascript-filter-for-objects)

```js
let romNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const filteredByValue = Object.fromEntries(
  Object.entries(romNumbers).filter(([key, value]) => value === 5)
);
console.log(filteredByValue); // {V: 5}
```

[[Javascript] 객체(Object) 속성(property) 개수 구하기](https://hianna.tistory.com/452)

```js
const obj = {
  product: "book",
  id: 123,
  page: 23,
};

const count = Object.keys(obj).length;

console.log(obj); // 3
```

여기까지 문제를 풀기 위해 동원한 검색입니다. 마지막 검색은 조금 부끄럽습니다. 그리고 아래는 정답입니다.

```js
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
```

코드 퀄리티가 그냥 좋다기보단 최선으로 보입니다.

# 안전지대

[안전지대](https://school.programmers.co.kr/learn/courses/30/lessons/120866)

풀이: 2022.12.13.

검색사용, 시간초과

```js
/**
 * @param {Array} board n*n 배열입니다.
 * @returns {Number} 안전한 칸수를 반환합니다.
 */
function solution(board) {
  // n*n의 n을 구합니다.
  const n = board.length;

  // 매설지대를 기록합니다.
  const memo = {};
  board.forEach((rowList, row) =>
    rowList.forEach((value, column) => {
      memo[`${row} ${column}`] = value;
    })
  );

  // 좌표를 찾아냅니다.
  const mineLocation = Object.keys(
    Object.fromEntries(Object.entries(memo).filter(([key, value]) => value > 0))
  ).map((loc) => loc.split(" ").map((loc) => Number(loc)));
  // 위험지대주변 1칸은 기록합니다.
  const dangerArea = [];
  mineLocation.forEach((xy) => {
    // 매설지대 + 1, - 1
    const xArea = [...Array(3).keys()].map((num) => xy[0] + num - 1); // 0 1 2
    const yArea = [...Array(3).keys()].map((num) => xy[1] + num - 1); // 0 1 2

    // 예외를 처리합니다. 0미만 n초과
    xArea.forEach((xElem) => {
      yArea.forEach((yElem) => {
        dangerArea.push([xElem, yElem]);
      });
    });
  });

  const dangerLocation = {};
  board.forEach((rowList, row) =>
    rowList.forEach((value, column) => {
      dangerLocation[`${row} ${column}`] = 0;
    })
  );

  dangerArea.forEach((xy) => {
    dangerLocation[`${xy[0]} ${xy[1]}`] += 1;
  });

  // 1이상의 위험지대를 구합니다. 전체에서 위험지대만큼 뺍니다.
  const answer =
    n * n -
    Object.keys(
      Object.fromEntries(
        Object.entries(dangerLocation).filter(([key, value]) => value > 0)
      )
    ).length;
  return answer;
}
```

```js
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
```

# 평행

[평행](https://school.programmers.co.kr/learn/courses/30/lessons/120875)

풀이: 2022.12.14.

시간 준수

```js
/**
 * @param {Array} dots [x, y] 4개를 갖는 배열입니다.
 * @returns {Number} 안전한 칸수를 반환합니다.
 */
function solution(dots) {
  // 모든 점을 비교합니다.
  let firstDot = null;
  const slopes = [];
  while (dots.length > 1) {
    firstDot = dots.pop();
    dots.forEach((secondeDot) => {
      slopes.push(slope(firstDot, secondeDot));
    });
  }
  // 6개의 기울기 중 1개로도 값이 일치하면 1없으면 0
  let firstSlope = null;
  while (slopes.length > 1) {
    firstSlope = slopes.pop();
    // 일치를 발견하면 순회 중단
    if (slopes.findIndex((slope) => slope === firstSlope) !== -1) {
      return 1;
    }
    // -1이 아닌 것을 찾으면 중단
  }
  return 0;
}

/**
 * 기울기를 구합니다.
 * @param {Array} dot1
 * @param {Array} dot2
 */
function slope(dot1, dot2) {
  return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
}
```

# [1차] 비밀지도

[[1차] 비밀지도](https://school.programmers.co.kr/learn/courses/30/lessons/17681)

풀이: 2022.12.16.

시간 준수, 검색 사용

```js
/**
 * @param {Array} strings
 * @param {Number} n
 * @returns {Array}
 */
function solution(n, arr1, arr2) {
  return [...Array(n)].map((_, idx) => {
    const firstByte = convertToBinary(arr1, n)[idx].split("");
    const secondByte = convertToBinary(arr2, n)[idx].split("");
    return [...Array(n)]
      .map((_, idx) => {
        return parseInt(firstByte[idx]) || parseInt(secondByte[idx])
          ? "#"
          : " ";
      })
      .join("");
  });
}

/**
 * @param {Number} num
 * @param {Array} arr
 * @returns {Array}
 */
function convertToBinary(arr, num) {
  return arr
    .map((number) => number.toString(2).split(""))
    .map((binary) => {
      const missingZero = [...Array(num - binary.length)].fill(0);
      binary.unshift(...missingZero);
      return binary.map((num) => num.toString()).join("");
    });
}
```

```js
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
```

정규표현식을 배웁시다.

`|`은 무엇인가요?

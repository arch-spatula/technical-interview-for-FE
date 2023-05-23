# 시작하기

다시 풀 가치가 있는 문제들만 따로 폴더를 만들 것입니다.

```js
/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let result = 0;
  return result;
}

export default solution;
```

이렇게 코드를 복사하기 바랍니다.

```js
import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("테스트에 대한 묶음", () => {
  test("테스트 케이스에 대한 설명", () => {
    expect(solution()).toBe();
  });
});
```

테스트는 문제를 이해하기 위해서 테스트 케이스를 작성하고 해결하는 방식으로 접하기 바랍니다.

```js
// playground.test.js
import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("배열의 개수를 셉니다.", () => {
  test("배열에서 1 2개를 찾습니다.", () => {
    expect(solution([1, 1, 2, 3, 4, 5], 1)).toBe(2);
  });

  test("배열에서 1을 못찾습니다.", () => {
    expect(solution([0, 2, 3, 4], 1)).toBe(0);
  });
});
```

이렇게 테스트케이스를 우선 작성해줍니다.

```js
// playground.js
/**
 * @param {number[]} array
 * @param {number[]} n
 * @returns {number}
 */
export function solution(array, n) {
  return array.filter((num) => num === n).length;
}
```

다음은 테스트에 해당하는 문제를 풀어보기바랍니다. 코딩테스트를 TDD와 유사한 접근을 하는 것은 생각을 정리하는 하나의 방법입니다.

폴더이름 숫자를 활용하기바랍니다.

```sh
yarn test
```

그리고 이렇게 테스트를 실행해주시기 바랍니다.

## 참고

```sh
yarn
```

설치 잊지맙시다.

# 앞으로 진도

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

https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=python3

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

[로그인 성공?](https://school.programmers.co.kr/learn/courses/30/lessons/120883)

```py
def solution(id_pw: list, db: list) -> str:
    # 클라이언트에서 입력받은 ID, PW를 저장합니다.
    [userID, userPW] = [id_pw[0], id_pw[1]]
    # DB를 순회합니다.
    for DB in db:
        # DB의 ID와 PW를 저장합니다.
        [appID, appPW] = [DB[0], DB[1]]
        # 아이디가 비교
        if userID == appID:
            # 비밀번호 일치       # 비밀번호 비교       # 비밀번호 불일치
            return 'login' if userPW == appPW else 'wrong pw'
    # 아이디가 불일치
    else: return 'fail' '
```

[팩토리얼](https://school.programmers.co.kr/learn/courses/30/lessons/120848)

```py
# 팩토리얼 함수를 만듭니다.
def factorial(n: int) -> int:
    if n <= 1 : return 1
    return n * factorial(n - 1)

# [1!, 2!, 3! ... 10!,]
factoArray = [factorial(num) for num in range(1, 10 + 1)]

def solution(n: int) -> int:
    result = 0
    # 순회합니다.
    for facto in factoArray:
        # facto 보다 크면
        if n >= facto: result += 1

    return result
```

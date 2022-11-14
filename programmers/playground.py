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


from math import factorial

factorial()
# 팩토리얼 함수를 동적계획법으로 구현하십시오.


memo = {
    1:1
}

def facto(n: int, memo: dict) -> int:
    if n in memo: return memo[n]
    else:
        memo[n] = n * facto(n - 1, memo)
    return memo[n]

print(facto(10, memo))
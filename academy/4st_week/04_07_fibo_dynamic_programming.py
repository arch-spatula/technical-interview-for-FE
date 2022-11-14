input = 100

# memo 라는 변수에 Fibo(1)과 Fibo(2) 값을 저장해놨습니다!
memo = {
    1: 1,
    2: 1
}

def fibo_dynamic_programming(n: int, fibo_memo: dict) -> int:
    # 있으면 반환합니다.
    if n in fibo_memo: return fibo_memo[n]
    # 없으면
    else:
        # 새롭게 추가하고
        fibo_memo[n] = fibo_dynamic_programming(n - 1, fibo_memo) + fibo_dynamic_programming(n - 2, fibo_memo)
        # 값을 반환합니다.
        return fibo_memo[n]

print(fibo_dynamic_programming(input, memo))
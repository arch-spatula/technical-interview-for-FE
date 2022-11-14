input = 20

def fibo_recursion(n: int) -> int:
    if n == 1 or n == 2: return 1
    else: return fibo_recursion(n - 1) + fibo_recursion(n - 2)

print(fibo_recursion(input))  # 6765

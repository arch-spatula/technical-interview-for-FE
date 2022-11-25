def solution(n: int) -> int:
    return 2 if int(str(n ** (1/2)).split('.')[1][0]) > 0 else 1



print(solution(144), 1)
print(solution(976), 2)
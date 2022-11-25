def solution(n: int) -> int:
    answer = 0
    # 1부터 n까지 순회합니다.
    for num in range(1, n+1):
        # 3배수가 되면 안 된다.
        # 3의 배수가 발생하면 건너뜁니다.
        if num % 3 == 0: answer += 2
        # 3의 배수가 아니면 정상순회합니다.
        elif '3' in str(num): 
            answer = int(str(num).replace('3', '4'))
        else: answer += 1


    return answer

print(solution(3), 4)
print(solution(6), 8)
print(solution(9), 14)
print(solution(15), 25)
print(solution(40), 76)
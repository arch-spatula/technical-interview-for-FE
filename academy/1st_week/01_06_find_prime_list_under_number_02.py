# Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.
# 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

# import math

input = 20  # output = [2, 3, 5, 7, 11, 13, 17, 19]

def find_prime_list_under_number(number: int):
    primeList = []

    for idx, elem in enumerate(range(2, number+1)):
        # 소수 판별
        for num in primeList:  # 4로 나누기 전에 2로 나누기 위해 primeList를 활용합니다.
            # 본인 이외 나누어질 수 있으면 소수가 아닙니다.
            if elem % num == 0 and num * num <= elem: break

        else: primeList.append(elem)

    return primeList

result = find_prime_list_under_number(input)
print(result)
# 시간복잡성을 묘사하십시오.
# O(N^2)
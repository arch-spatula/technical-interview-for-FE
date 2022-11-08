# Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.
# 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

# import math

input = 19  # output = [2, 3, 5, 7, 11, 13, 17, 19]

def find_prime_list_under_number(number):
    result = []
    # 소수를 판단합니다.
    def checkPrime(number):
        '''
        소수를 인자로 넣습니다.
        소수이면 인자를 그대로 반환합니다.
        소수가 아니면 -1을 반환합니다.
        '''
        checkerList = []
        for num in range(2, number):
            if number % num == 0: checkerList.append(num)
        if len(checkerList) == 0: return number
        return -1

    for n in range(2, number+1):
        if checkPrime(n) != -1: result.append(n)

    # print(checkPrime(19))
    return result

result = find_prime_list_under_number(input)
print(result)
# 시간복잡성을 묘사하십시오.
# O(N^2)
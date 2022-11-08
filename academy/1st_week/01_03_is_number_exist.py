# Q. 다음과 같은 숫자로 이루어진 배열이 있을 때, 이 배열 내에 특정 숫자가 존재한다면 True, 존재하지 않다면 False 를 반환하시오.

# 가장 파이써닉한 방법
# def is_number_exist(number, array):
#     if number in array: return True
#     else: return False

#  in 키워드 금지
def is_number_exist(number, array):
    for num in array:
        if number == num: return True
    return False



result = is_number_exist
print("정답 = True 현재 풀이 값 =", result(3,[3,5,6,1,2,4]))
print("정답 = False 현재 풀이 값 =", result(7,[6,6,6]))
print("정답 = True 현재 풀이 값 =", result(2,[6,9,2,7,1888]))

# 풀이의 시간복잡도는 무엇인가요?
# O(N)
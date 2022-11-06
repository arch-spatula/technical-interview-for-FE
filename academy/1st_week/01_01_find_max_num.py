# 다음과 같이 숫자로 이루어진 배열이 있을 때, 이 배열 내에서 가장 큰 수를 반환하시오.

# 가장 우아한 방법
# def find_max_num(array):
#     return max(array)

# max 내장함수 사용금지
def find_max_num(array):
    bin = array[0]
    for i in array:
        if i > bin : bin = i
    return bin


print("정답 = 6 / 현재 풀이 값 = ", find_max_num([3, 5, 6, 1, 2, 4]))
print("정답 = 6 / 현재 풀이 값 = ", find_max_num([6, 6, 6]))
print("정답 = 1888 / 현재 풀이 값 = ", find_max_num([6, 9, 2, 7, 1888]))
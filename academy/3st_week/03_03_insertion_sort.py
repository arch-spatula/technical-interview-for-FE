input = [4, 6, 2, 9, 1]

def insertion_sort(array: list):
    n = len(array)
    # 첫번째 원소는 검토할 필요가 없습니다.
    for i in range(1, n):
        for j in range(i):
            # 앞뒤를 비교하고 앞이 더 크면 자리를 교환합니다.
            if array[i - j - 1] > array[i - j]: array[i - j - 1], array[i - j] = array[i - j], array[i - j - 1]
    return array

insertion_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ",insertion_sort([5,8,4,7,7]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",insertion_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",insertion_sort([100,56,-3,32,44]))
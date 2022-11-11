input = [4, 6, 2, 9, 1]


def bubble_sort(array: list):
    n = len(array)
    # 한 길이를 모두 순회합니다.
    for i in range(n):
        # 1개식 줄여가면서 순회합니다.
        for j in range(n - i - 1):
            # 앞이 뒤보다 더 크면
            if array[j] > array[j+1]:
                # 교환합니다.
                array[j], array[j+1] = array[j+1], array[j]
    return array


bubble_sort(input)
print(input)  # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",bubble_sort([4, 6, 2, 9, 1]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",bubble_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",bubble_sort([100,56,-3,32,44]))
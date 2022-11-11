input = [4, 6, 2, 9, 1]


def selection_sort(array: list):
    n = len(array)
    for i in range(n - 1):
        # 가장 작은 값의 인덱스 선형탐색
        minIndex = i
        for j in range(n - i):
            # 앞에 하나 줄어든 배열 중에서
            if array[i+j] < array[minIndex]:
                # 가장 작은 인덱스 업데이트
                minIndex = i+j

        array[i], array[minIndex] = array[minIndex], array[i]

    return array


selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",selection_sort([4, 6, 2, 9, 1]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",selection_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",selection_sort([100,56,-3,32,44]))
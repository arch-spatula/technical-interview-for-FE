array = [5, 3, 2, 1, 6, 8, 7, 4]

def merge_sort(array):
    if len(array) <= 1: return array
    mid = len(array)//2
    left_array = merge_sort(array[mid:])
    right_array = merge_sort(array[:mid])
    return merge(left_array, right_array)

def merge(array1: list, array2: list):
    mergeArray = []
    array2Index = 0
    array1Index = 0
    while array1Index < len(array1) and array2Index < len(array2):
        if array1[array1Index] < array2[array2Index]:
            mergeArray.append(array1[array1Index])
            array1Index += 1
        else:
            mergeArray.append(array2[array2Index])
            array2Index += 1

    # 남는 원소 처리
    while array1Index < len(array1):
        mergeArray.append(array1[array1Index])
        array1Index += 1

    while array2Index < len(array1):
        mergeArray.append(array1[array2Index])
        array2Index += 1

    return mergeArray

print(merge_sort(array))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

print("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ", merge_sort([-7, -1, 9, 40, 5, 6, 10, 11]))
print("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ", merge_sort([-1, 2, 3, 5, 40, 10, 78, 100]))
print("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ", merge_sort([-1, -1, 0, 1, 6, 9, 10]))

# 실패 케이스 존재
array_a = [1, 2, 3, 5]
array_b = [4, 6, 7, 8]

def merge(array1: list, array2: list):
    # 중첩 순회
    newArray = []
    while len(array2) != 0:
        outer = array2.pop(0)
        while len(array1) != 0:
            inner = array1.pop(0)
            if outer > inner:
                newArray.append(inner)
            elif outer < inner:
                break
        newArray.append(outer)
    return newArray

print(merge(array_a, array_b))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

print("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ", merge([-7, -1, 9, 40], [5, 6, 10, 11]))
print("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ", merge([-1,2,3,5,40], [10,78,100]))
print("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ", merge([-1,-1,0], [1, 6, 9, 10]))
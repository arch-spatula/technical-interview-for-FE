finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    # 배열이 1보다 큰 동안
    while len(array) > 1:
        # 중간값의 인덱스를 찾아냅니다.
        midIndex = len(array)//2
        # 가운데를 찍었습니다.
        compare = array[midIndex]
        # 일치하는지 확인합니다.
        if compare == target: return True
        # target이 중간값보다 크면
        elif target > compare:
            # 위 반절을 남깁니다.
            array = array[midIndex:]
        # target이 중간값보다 작으면
        elif target < compare:
            # 아래 반절을 남깁니다.
            array = array[:midIndex]
    else: return False



result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
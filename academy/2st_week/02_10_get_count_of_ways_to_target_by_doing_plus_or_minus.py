# 결국 못 풀었습니다.

numbers = [1, 1, 1, 1, 1]
target_number = 3
result_count = 0  # target 을 달성할 수 있는 모든 방법의 수를 담기 위한 변수

def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, current_index, current_sum):
    # 베이스 케이스
    if current_index == len(array):
        # 현재 합계가 target이면
        if current_sum == target:
            global result_count     # 스코프를 나와서
            result_count += 1       # 경우의 수 하나를 더해줍니다.
        return
    get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, current_index + 1,
                                                       current_sum + array[current_index])  # 한 번 더해보고
    get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, current_index + 1,
                                                       current_sum - array[current_index])  # 한 번 빼보고

get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number, 0, 0)  # 5를 반환해야 합니다!
print(result_count)

# Q.
# 1. 입력으로 소문자의 알파벳 순으로 정렬된 문자열이 입력됩니다.
# 2. 각 알파벳은 중복이 가능합니다.
# 3. 중간에 없는 알파벳이 있을 수도 있습니다.

# 입,출력 예시와 같이 입력 문자열에 나타나는 각 알파벳의 종류,갯수를 요약하여 나타내시오.


def summarize_string(input_str):
    # 알파벳을 기록할 배열
    alphaBet = [0] * 26

    # 존재하는 값들을 배열에 업데이트
    for thread in input_str:
        alphaBet[ord(thread) - ord('a')] += 1

    result = ''
    for idx in range(len(alphaBet)):
        if alphaBet[idx] > 0: result += chr(idx + ord('a')) + str(alphaBet[idx])

    return result


input_str = "acccdeee"  # a1c3d1e3

print(summarize_string(input_str))
# 시간복잡성을 묘사하십시오.
# O(N)
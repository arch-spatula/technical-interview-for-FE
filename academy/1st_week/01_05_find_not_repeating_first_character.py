# Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때, 이 문자열에서 반복되지 않는 첫번째 문자를 반환하시오. 만약 그런 문자가 없다면 _ 를 반환하시오.
# 문자열이 홀수번 등장하면 반복하지 않는 것으로 간주합니다.
input = "abadabac"

input = "abadabac"

def find_not_repeating_first_character(string: str):
    alphabet = [0] * 26
    for letter in string:
        alphabet[ord(letter)-ord('a')] += 1

    oddChr = []
    for idx, count in enumerate(alphabet):
        if count % 2 != 0: oddChr.append(chr(idx + ord('a')))

    for letter in string:
        if letter in oddChr: 
            return letter

    else: return '_'



result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 = _ 현재 풀이 값 =", result("aaaaaaaa"))

result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))  # ab ad <- 반복이 아님 ab ac
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))  # aa bb cd <- 반복이 아님
print("정답 = _ 현재 풀이 값 =", result("aaaaaaaa"))
# 풀이의 시간복잡도는 무엇인가요?
# O(N)에 근사합니다.
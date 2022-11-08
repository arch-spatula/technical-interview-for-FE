def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26

    for i in string:
        if i.isalpha(): alphabet_occurrence_array[ord(i) - ord('a')] += 1

    return chr(alphabet_occurrence_array.index(max(alphabet_occurrence_array)) + ord('a'))


print("정답 = a 현재 풀이 값 =", find_max_occurred_alphabet("Hello my name is sparta"))
print("정답 = a 현재 풀이 값 =", find_max_occurred_alphabet("Sparta coding club"))
print("정답 = s 현재 풀이 값 =", find_max_occurred_alphabet("best of best sparta"))
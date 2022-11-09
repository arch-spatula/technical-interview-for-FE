input = "abcba"

def is_palindrome(string: str):
    # 문자열을 한글자식 순회합니다.
    for index, letter in enumerate(string):
        # 앞뒤를 비교합니다.
        if string[index] != string[-index-1]: return False
            # 불일치하면 False를 반환값이다.
    else: return True


print(is_palindrome(input))
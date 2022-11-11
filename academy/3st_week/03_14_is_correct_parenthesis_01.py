'''
Q. 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻이다. 예를 들어

()() 또는 (())() 는 올바르다.
)()( 또는 (()( 는 올바르지 않다.

이 때, '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 True 를 반환하고 아니라면 False 를 반환하시오.
'''
def is_correct_parenthesis(string: str) -> bool:
    stack = []  # (
    for letter in string:
        if letter == '(': stack.append(letter)
        elif letter == ')':
            if len(stack) == 0: return False  # 일찍 닫히면 짝이 없습니다.
            stack.pop()

    return True if len(stack) == 0 else False


print("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("))(("))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())))"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"))
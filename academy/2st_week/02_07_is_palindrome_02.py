input = "소주만병만주소"

def is_palindrome(string: str):
    '''
    abcba -> 'a' bcb 'a' abcba[0:-1]
    bcb -> 'b' c 'b' bcb[0:-1]
    c -> c c[0:-1]
    '''
    if len(string) <= 1 and string[0] == string[-1]: return True
    elif string[0] == string[-1]: return is_palindrome(string[1:-1])
    else: return False


print(is_palindrome(input))
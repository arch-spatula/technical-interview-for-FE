top_heights = [6, 9, 5, 7, 4]

def get_receiver_top_orders(heights: list):
    bitmap = [0] * len(heights)
    while heights:  # O(N) 시간복잡도
        height = heights.pop()
        for i in range(len(heights) - 1, 0, -1):  # O(N) 시간복잡도
            if heights[i] > height:
                bitmap[len(heights)] = i + 1
                break

    return bitmap

print(get_receiver_top_orders(top_heights))  # [0, 0, 2, 2, 4] 가 반환되어야 한다!

print("정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ",get_receiver_top_orders([6,9,5,7,4]))
print("정답 = [0, 0, 0, 3, 3, 3, 6] / 현재 풀이 값 = ",get_receiver_top_orders([3,9,9,3,5,7,2]))
print("정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ",get_receiver_top_orders([1,5,3,6,7,6,5]))
# 시간복잡성을 묘사하십시오.
# O(N^2)
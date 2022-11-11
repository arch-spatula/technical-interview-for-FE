shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두",]

def is_available_to_order(menus: list, orders: list):
    # 이진탐색이 가능하도록 한글을 정렬합니다.
    menus.sort()

    # menus를 이진탐색(책임분리)하고
    def binarySearch(array:list, target: int):
        midIndex = len(array)//2
        gaussValue = array[midIndex]
        if len(array) == 1 and array[0] != target: return False
        if gaussValue == target: return True
        elif gaussValue > target: return binarySearch(array[:midIndex], target)
        elif gaussValue < target: return binarySearch(array[midIndex:], target)

    check = []
    # orders 순회
    for order in orders:
        check.append(binarySearch(menus, order))

    # 모두 존재하면서 주문가능
    if sum(check) == len(orders): return True
    else: return False

result = is_available_to_order(shop_menus, shop_orders)
print(result)
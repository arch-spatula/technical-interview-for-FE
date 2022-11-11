shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두",]

def is_available_to_order(menus: list, orders: list):

    menus = set(menus)
    for order in orders:
        if not order in menus: return False

    return True

result = is_available_to_order(shop_menus, shop_orders)
print(result)
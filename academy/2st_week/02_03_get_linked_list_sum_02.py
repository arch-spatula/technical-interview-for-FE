class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)


def get_linked_list_sum(linked_list_1: LinkedList, linked_list_2: LinkedList):
    # 형변환 금지입니다.
    def loopLinkedList(linkedList: LinkedList):
        linkedListSum = 0
        cur = linkedList.head
        while cur is not None:
            linkedListSum = linkedListSum * 10 + cur.data
            cur = cur.next
        return linkedListSum

    return loopLinkedList(linked_list_1) + loopLinkedList(linked_list_2)


linked_list_1 = LinkedList(6)
linked_list_1.append(7)
linked_list_1.append(8)

linked_list_2 = LinkedList(3)
linked_list_2.append(5)
linked_list_2.append(4)

print(get_linked_list_sum(linked_list_1, linked_list_2))
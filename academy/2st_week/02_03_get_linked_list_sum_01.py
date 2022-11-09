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
    def loopLinkedList(linkedList: LinkedList):
        result = ''
        cur = linkedList.head
        result += str(cur.data)
        while cur.next is not None:
            cur = cur.next
            result += str(cur.data)
        return int(result)

    return loopLinkedList(linked_list_1) + loopLinkedList(linked_list_2)


linked_list_1 = LinkedList(6)
linked_list_1.append(7)
linked_list_1.append(8)

linked_list_2 = LinkedList(3)
linked_list_2.append(5)
linked_list_2.append(4)

print(get_linked_list_sum(linked_list_1, linked_list_2))
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

    # 노드의 개수
    def countNode(self):
        nodeCount = 0
        cur = self.head
        while cur is not None:
            nodeCount += 1
            cur = cur.next
        return nodeCount

    def get_kth_node_from_last(self, k:int):
        cur = self.head
        for node in range(self.countNode() - k):
            cur = cur.next
        return cur


linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)

print(linked_list.get_kth_node_from_last(2).data)  # 7이 나와야 합니다!
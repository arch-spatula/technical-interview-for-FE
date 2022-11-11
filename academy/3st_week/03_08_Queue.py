class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        newNode = Node(value)
        if self.is_empty():
            self.tail = newNode
            self.head = newNode
            return  # 실행종료

        newNode.next = self.tail
        self.tail = newNode

    def dequeue(self):
        if self.is_empty(): return 'empty'
        queuePop = self.head
        self.head = self.head.next
        return queuePop.data

    def peek(self):
        return self.head.data

    def is_empty(self):
        return self.head == None and self.tail == None

queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(
    queue.peek(),       # 10
    queue.dequeue()     # 10
)
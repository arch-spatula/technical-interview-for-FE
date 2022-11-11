class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        newStack = Node(value)
        newStack.next = self.head
        self.head = newStack

    # pop 기능 구현
    def pop(self):
        if self.is_empty(): return 'Stack은 비어있습니다.'
        # self.head를 조회합니다.
        stackPop = self.head
        # self.head를 삭제합니다.
        self.head = self.head.next
        return stackPop

    def peek(self):
        return self.head

    def is_empty(self):
        return self.head is None

stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.peek().data) # 30
print(stack.pop().data)  # 30
print(stack.pop().data)  # 20
print(stack.peek().data) # 10

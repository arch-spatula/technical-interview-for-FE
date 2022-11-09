class Node:
    def __init__(self, data) -> None:
        self.data = data  # 여기는 필요한 자료를 할당할 수 있습니다.
        self.next = None  # 처음에는 연결할 게 없습니다. 여기 속성값이 포인터 역할을 합니다.

class LinkedList:
    def __init__(self, data):
        self.head = Node(data)  # Head 역할을 할 Node를 할당합니다.

    def append(self, data):
        # 예외처리 Head가 없는 경우 append를 하면 Head로 할당해줍니다.
        if self.head is None:
            self.head = Node(data)
            return  # 메서드의 실행을 종료시킵니다.

        # Tail에 접근(선형탐색)
        cur = self.head
        while cur.next is not None:
            cur = cur.next

        # 추가
        cur.next = Node(data)

    def printAll(self):
        if self.head is None:
            print("empty")

        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    # 인덱스 횟수만큼 이동하기 위해 for문을 사용합니다.
    def getNode(self, index):
        cur = self.head
        if index > 0:
            for idx in range(index):
                cur = cur.next
        return cur

    # 인덱스 번째 원소를 추가합니다.
    def addNode(self, index, value):
        newNode = Node(value)
        # head를 교체할 때
        if index == 0:
            newNode.next = self.head
            self.head = newNode
            return  #실행 종료

        prevNode = self.getNode(index - 1)  # [a] -> [b] -> [c] a랑 b사이 d를 추가할 때 b 이전 a를 선택합니다.
        nextNode = prevNode.next            # [b] 노드를 기록합니다.
        prevNode.next = newNode             # [a]의 다음 노드를 [d]를 바라보게 합니다. [a] -> [b] -> none  & [b] -> [c]
        newNode.next = nextNode             # [d]는 [b]를 바라보게 합니다. [a] -> [b] -> [b] -> [c]
        return  #실행 종료

    def deleteNode(self, index):
        # [a]를 삭제할 때
        if index == 0:
            self.head = self.getNode(index+1)
            return  #실행 종료

        # [d]를 삭제할 때
        if self.getNode(index).next == None:
            self.getNode(index-1).next = None
            return  #실행 종료

        # 유스케이스
        # [a] -> [b] -> [c] -> [d] 중에서 [c]를 삭제하기 위해 [b] 선택합니다.
        prevNode = self.getNode(index-1)
        # [a] -> [b] -> [d]로 포인터를 바꿉니다. [c]는 전후관계가 없어집니다. 메모리 누수가 있는지 모르겠습니다.
        prevNode.next = prevNode.next.next

# 5 -> 12 -> 8
linkedList = LinkedList(5)
linkedList.append(12)
linkedList.append(8)

linkedList.addNode(2, 3)
linkedList.deleteNode(3)
linkedList.printAll()

# print(linkedList.getNode(0).data)
# print(linkedList.getNode(1).data)
# print(linkedList.getNode(2).data)
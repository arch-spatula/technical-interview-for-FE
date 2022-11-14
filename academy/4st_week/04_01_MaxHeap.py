class MaxHeap:
    def __init__(self):
        # 트리가 [None]으로 시작하는 것과 상통합니다.
        self.items = [None]

    def insert(self, value: int) -> None:
        # 원소를 마지막에 추가합니다.
        self.items.append(value)
        # 최근에 추가한 자식노드(self.items[currIndex])를 선택합니다.
        currIndex = len(self.items) - 1

        # 최근에 삽입한 노드가 루트노드가 되면 실행을 중단합니다.
        while currIndex > 1:
            # 부모 노드의 인덱스(self.items[parentIndex])를 선택합니다.
            parentIndex = currIndex // 2
            # 자식노드가 부모노드보다 크면
            if self.items[currIndex] > self.items[parentIndex]:
                # 부모와 자식의 위치를 바꿉니다.
                self.items[currIndex], self.items[parentIndex] = self.items[parentIndex], self.items[currIndex]
                # 계속 선택하기 위해서 최근에 추가한 노드의 인덱스를 업데이트합니다.
                currIndex = parentIndex
            else: break

        return

max_heap = MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
print(max_heap.items)  # [None, 9, 4, 2, 3] 가 출력되어야 합니다!
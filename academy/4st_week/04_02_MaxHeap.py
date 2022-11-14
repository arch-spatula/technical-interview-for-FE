class MaxHeap:
    def __init__(self):
        self.items = [None]

    def insert(self, value):
        self.items.append(value)
        cur_index = len(self.items) - 1

        while cur_index > 1:  # cur_index 가 1이 되면 정상을 찍은거라 다른 것과 비교 안하셔도 됩니다!
            parent_index = cur_index // 2
            if self.items[parent_index] < self.items[cur_index]:
                self.items[parent_index], self.items[cur_index] = self.items[cur_index], self.items[parent_index]
                cur_index = parent_index
            else:
                break

    def delete(self):
        # 가장 최근 노드랑 루트 노드랑 자리 교체
        self.items[1], self.items[-1] = self.items[-1], self.items[1]
        result = self.items.pop()  # Root Node를 pop합니다.

        # heapify 이전 상태 [None, 4, 6, 7, 2, 5]
        # 새로운 Root Node의 인덱스
        currIndex = 1

        # 새로운 Root Node가 인덱스를 초과하지 않을 때까지
        while currIndex < len(self.items) - 1:
            # 가장 큰 Node의 인덱스 값입니다.
            maxNodeIndex = currIndex
            # 자식끼리 비교합니다.
            leftNodeIndex = currIndex*2
            rightNodeIndex = currIndex*2+1

            # 왼쪽 자식노드가 존재하면                      # 왼쪽 노드가 부모 노드보다 크면
            if leftNodeIndex < len(self.items) - 1 and self.items[leftNodeIndex] > self.items[maxNodeIndex]:
                # 더 큰 자식노드를 업데이트합니다.
                maxNodeIndex = leftNodeIndex

            # 오른쪽 자식노드가 존재하면                    # 오른쪽 노드가 부모 노드보다 크면
            if rightNodeIndex < len(self.items) - 1 and self.items[rightNodeIndex] > self.items[maxNodeIndex]:
                # 더 큰 자식노드를 업데이트합니다.
                maxNodeIndex = rightNodeIndex

            # maxNodeIndex는 순회할 때마다 업데이트 됩니다. 위 조건문에 안 걸리면 더이상 업데이트할게 없는 것으로 보고 종료시킵니다.
            if maxNodeIndex == currIndex:
                break

            # 가장 큰 노드랑 현재 노드랑 자리를 바꿉니다.
            self.items[currIndex], self.items[maxNodeIndex] = self.items[maxNodeIndex], self.items[currIndex]
            # 자리가 바뀐 노드를 업데이트합니다.
            currIndex = maxNodeIndex

        # 결과 출력
        return result


max_heap = MaxHeap()
max_heap.insert(8)
max_heap.insert(6)
max_heap.insert(7)
max_heap.insert(2)
max_heap.insert(5)
max_heap.insert(4)
print(max_heap.items)  # [None, 8, 6, 7, 2, 5, 4]
print(max_heap.delete())  # 8 을 반환해야 합니다!
print(max_heap.items)  # [None, 7, 6, 4, 2, 5]
# 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
graph = {
    1: [2, 3, 4],
    2: [1, 5],
    3: [1, 6, 7],
    4: [1, 8],
    5: [2, 9],
    6: [3, 10],
    7: [3],
    8: [4],
    9: [5],
    10: [6]
}


def bfs_queue(adj_graph: dict, start_node: int) -> list:
    queue = [start_node]
    visited = []

    # 찾아볼 경로가 존재하는 동안
    while queue:
        # 현재 방문한 노드
        currNode = queue.pop()
        # 방문을 하면 visited에 추가해줍니다.
        visited.append(currNode)
        # 그래프에서 현재 노드에서 접근할 수 있는 노드를 순회합니다.
        for node in adj_graph[currNode]:
            # 가장 왼쪽에 추가합니다.
            if node not in visited: queue.insert(0, node)

    return visited


print(bfs_queue(graph, 1))  # 1 이 시작노드입니다!
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!
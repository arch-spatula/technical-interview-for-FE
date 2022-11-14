# 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
graph = {
    1: [2, 5, 9],
    2: [1, 3],
    3: [2, 4],
    4: [3],
    5: [1, 6, 8],
    6: [5, 7],
    7: [6],
    8: [5],
    9: [1, 10],
    10: [9]
}


def dfs_stack(adjacent_graph: dict, start_node: int) -> list:
    # 초깃값 설정
    stack = [start_node]
    # 방문 배열
    visited = []
    # 앞으로 방문해야 하는 Node가 존재하는 동안
    while stack:
        # 현재 방문한 노드
        currNode = stack.pop()
        # 방문을 하면 visited에 추가해줍니다.
        visited.append(currNode)
        # 그래프에서 현재 노드에서 접근할 수 있는 노드를 순회합니다.
        for node in adjacent_graph[currNode]:
            # 현재 접근할 수 있는 노드 중에 방문한적이 없으면 Stack에 추가합니다.
            if node not in visited: stack.append(node)

    return visited


print(dfs_stack(graph, 1))  # 1 이 시작노드입니다!
# [1, 9, 10, 5, 8, 6, 7, 2, 3, 4] 이 출력되어야 합니다!
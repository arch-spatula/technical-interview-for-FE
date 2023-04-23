export class Graph {
  private adjacencyList: { [key: string | number]: (string | number)[] };

  constructor() {
    this.adjacencyList = {};
  }

  get getList() {
    return this.adjacencyList;
  }

  addVertex(key: string | number) {
    if (this.adjacencyList[key]) return null;
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1: string | number, vertex2: string | number) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string | number, vertex2: string | number) {
    // 존재하지 않는 버텍스에 기능 정지
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;
    // 이미 엣지가 없으면 기능 정지
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex: string | number) {
    if (!this.adjacencyList[vertex]) return null;

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  searchByDepthFirstRecursive(start: string | number) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    // 탐색 기록
    const visitedVertex = {};
    const result: (string | number)[] = [];
    const adjacencyList = this.adjacencyList; // 접근할 수 있게 식별자를 선언

    // 탐색 처리
    (function DFS(vertex) {
      if (!vertex) return null; // vertex는 start를 매개변수로 받을 수 있습니다. vertex는 존재하지 않는 경우도 있습니다.
      visitedVertex[vertex] = true;
      result.push(vertex);
      // 여기서 this가 사라지는 이유는 메서드로서 호출이 아닌 함수로 호출하기 때문입니다.
      adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visitedVertex[adjacentVertex]) DFS(adjacentVertex);
      });
    })(start);

    return result;
  }
}

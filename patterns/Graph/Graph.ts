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
}

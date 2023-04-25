type Vertex = string | number;
type Edge = { vertex: Vertex; weight: number };

class Node<T> {
  public val: T;
  public priority: number;
  constructor(val: T, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  private values: Node<T>[];
  constructor() {
    this.values = [];
  }
  get getValues() {
    return this.values;
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element?.priority >= parent?.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap: null | number = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

export class WeightedGraph {
  private adjacencyList: { [key: Vertex]: Edge[] };

  constructor() {
    this.adjacencyList = {};
  }

  get getList() {
    return this.adjacencyList;
  }

  addVertex(key: Vertex) {
    if (this.adjacencyList[key]) return null;
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }

  removeEdge(vertex1: Vertex, vertex2: Vertex) {
    // 존재하지 않는 버텍스에 기능 정지
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;
    // 이미 엣지가 없으면 기능 정지
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v.vertex !== vertex1
    );
  }

  removeVertex(vertex: Vertex) {
    if (!this.adjacencyList[vertex]) return null;

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacentVertex.vertex);
    }
    delete this.adjacencyList[vertex];
  }

  searchByDepthFirstRecursive(start: Vertex) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    // 탐색 기록
    const visitedVertex = {};
    const result: Vertex[] = [];
    const adjacencyList = this.adjacencyList; // 접근할 수 있게 식별자를 선언

    // 탐색 처리
    (function DFS(vertex) {
      if (!vertex) return null; // vertex는 start를 매개변수로 받을 수 있습니다. vertex는 존재하지 않는 경우도 있습니다.
      visitedVertex[vertex] = true;
      result.push(vertex);
      // 여기서 this가 사라지는 이유는 메서드로서 호출이 아닌 함수로 호출하기 때문입니다.
      adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visitedVertex[adjacentVertex.vertex]) DFS(adjacentVertex.vertex);
      });
    })(start);

    return result;
  }

  searchByDepthFirstIterative(start: Vertex) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    const stack = [start];
    const result: Vertex[] = [];
    const visitedVertex = {};

    visitedVertex[start] = true;
    while (stack.length > 0) {
      const vertex = stack.pop()!;
      result.push(vertex);
      // 방문을 안 한 노드만 추가?
      this.adjacencyList[vertex].forEach((vertexItem) => {
        if (!visitedVertex[vertexItem.vertex]) {
          visitedVertex[vertexItem.vertex] = true;
          stack.push(vertexItem.vertex);
        }
      });
    }
    return result;
  }

  searchByBreadthFirst(start: Vertex) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    const queue = [start];
    const result: Vertex[] = [];
    const visitedVertex = {};
    visitedVertex[start] = true;
    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((vertexItem) => {
        if (!visitedVertex[vertexItem.vertex]) {
          visitedVertex[vertexItem.vertex] = true;
          queue.push(vertexItem.vertex);
        }
      });
    }
    return result;
  }

  findShortest(start: Vertex, end: Vertex) {
    const distances: { [keys: Vertex]: number } = {};
    const nodes = new PriorityQueue<Vertex>();
    const previous = {};
    let smallest;
    const path: Vertex[] = [];

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.getValues.length > 0) {
      smallest = nodes.dequeue()?.val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        //
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.vertex;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

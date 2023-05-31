import WeightedGraph from './WeightedGraphJS';
import { describe, test, expect } from 'vitest';

describe('WeightedGraph', () => {
  test('버텍스를 추가하면 버텍스를 키로 갖고 빈 배열을 값으로 갖음', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    expect(graph.getList).toEqual({ foo: [] });
  });

  test('이미 있는 버텍스를 추가하면 덮어쓰기를 막음', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    expect(graph.addVertex('foo')).toBeNull();
  });

  test('1개의 버텍스트를 삭제합니다.', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    graph.removeVertex('foo');
    expect(graph.getList).toEqual({});
  });
});

describe('DFS & BFS', () => {
  test('DFS Recursive', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    expect(graph.searchByDepthFirstRecursive('A')).toEqual([
      'A',
      'B',
      'D',
      'E',
      'C',
      'F',
    ]);
  });

  test('DFS Iterative', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    expect(graph.searchByDepthFirstIterative('A')).toEqual([
      'A',
      'C',
      'E',
      'F',
      'D',
      'B',
    ]);
  });

  test('BFS Iterative', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F

    expect(graph.searchByBreadthFirst('A')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ]);
  });
});

describe('findShortest', () => {
  test('다익스트라 최단경로', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('C', 'F', 4);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('D', 'F', 1);
    graph.addEdge('E', 'F', 1);
    expect(graph.findShortest('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});

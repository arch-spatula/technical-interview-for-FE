import { WeightedGraph } from "./WeightedGraph";
import { describe, test, expect } from "vitest";

describe("WeightedGraph", () => {
  test("버텍스를 추가하면 버텍스를 키로 갖고 빈 배열을 값으로 갖음", () => {
    const graph = new WeightedGraph();
    graph.addVertex("foo");
    expect(graph.getList).toEqual({ foo: [] });
  });

  test("이미 있는 버텍스를 추가하면 덮어쓰기를 막음", () => {
    const graph = new WeightedGraph();
    graph.addVertex("foo");
    expect(graph.addVertex("foo")).toBeNull();
  });

  // test("엣지를 추가할 수 있습니다.", () => {
  //   const graph = new WeightedGraph();
  //   graph.addVertex("foo");
  //   graph.addVertex("bar");
  //   graph.addEdge("foo", "bar", 10);
  //   expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  // });

  // test("엣지를 삭제합니다.", () => {
  //   const graph = new WeightedGraph();
  //   graph.addVertex("foo");
  //   graph.addVertex("bar");
  //   graph.addVertex("baz");
  //   graph.addEdge("foo", "bar", 20); // { foo: ["bar"], bar: ["foo"] }
  //   graph.addEdge("baz", "bar", 30); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
  //   graph.addEdge("foo", "baz", 40); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
  //   graph.removeEdge("foo", "bar"); // { baz: ["bar", "foo"], bar: ["baz"], foo: ["baz"] }
  //   expect(graph.getList).toEqual({
  //     baz: ["bar", "foo"],
  //     bar: ["baz"],
  //     foo: ["baz"],
  //   });
  // });

  // test("버텍스를 삭제합니다.", () => {
  //   const graph = new WeightedGraph();
  //   graph.addVertex("foo");
  //   graph.addVertex("bar");
  //   graph.addVertex("baz");
  //   graph.addEdge("foo", "bar", 10); // { foo: ["bar"], bar: ["foo"] }
  //   graph.addEdge("baz", "bar", 20); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
  //   graph.addEdge("foo", "baz", 30); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
  //   graph.removeVertex("baz");
  //   expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  // });

  test("1개의 버텍스트를 삭제합니다.", () => {
    const graph = new WeightedGraph();
    graph.addVertex("foo");
    graph.removeVertex("foo");
    expect(graph.getList).toEqual({});
  });
});

describe("DFS & BFS", () => {
  // test("setup", () => {
  //   const graph = new WeightedGraph();
  //   graph.addVertex("A");
  //   graph.addVertex("B");
  //   graph.addVertex("C");
  //   graph.addVertex("D");
  //   graph.addVertex("E");
  //   graph.addVertex("F");

  //   graph.addEdge("A", "B", 10);
  //   graph.addEdge("A", "C", 20);
  //   graph.addEdge("B", "D", 30);
  //   graph.addEdge("C", "E", 40);
  //   graph.addEdge("D", "E", 50);
  //   graph.addEdge("D", "F", 40);
  //   graph.addEdge("E", "F", 30);
  //   expect(graph.getList).toEqual({
  //     A: ["B", "C"],
  //     B: ["A", "D"],
  //     C: ["A", "E"],
  //     D: ["B", "E", "F"],
  //     E: ["C", "D", "F"],
  //     F: ["D", "E"],
  //   });
  // });

  test("DFS Recursive", () => {
    const graph = new WeightedGraph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B", 10);
    graph.addEdge("A", "C", 20);
    graph.addEdge("B", "D", 30);
    graph.addEdge("C", "E", 40);
    graph.addEdge("D", "E", 50);
    graph.addEdge("D", "F", 40);
    graph.addEdge("E", "F", 30);

    expect(graph.searchByDepthFirstRecursive("A")).toEqual([
      "A",
      "B",
      "D",
      "E",
      "C",
      "F",
    ]);
  });

  test("DFS Iterative", () => {
    const graph = new WeightedGraph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B", 10);
    graph.addEdge("A", "C", 20);
    graph.addEdge("B", "D", 30);
    graph.addEdge("C", "E", 40);
    graph.addEdge("D", "E", 50);
    graph.addEdge("D", "F", 40);
    graph.addEdge("E", "F", 30);

    expect(graph.searchByDepthFirstIterative("A")).toEqual([
      "A",
      "C",
      "E",
      "F",
      "D",
      "B",
    ]);
  });

  test("BFS Iterative", () => {
    const graph = new WeightedGraph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B", 10);
    graph.addEdge("A", "C", 20);
    graph.addEdge("B", "D", 30);
    graph.addEdge("C", "E", 40);
    graph.addEdge("D", "E", 50);
    graph.addEdge("D", "F", 40);
    graph.addEdge("E", "F", 30);

    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F

    expect(graph.searchByBreadthFirst("A")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ]);
  });
});

describe("findShortest", () => {
  test("???", () => {
    const graph = new WeightedGraph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.findShortest("A", "E")).toEqual(["A", "C", "D", "F", "E"]);
  });
});

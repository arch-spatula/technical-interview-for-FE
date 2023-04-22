import { Graph } from "./Graph";
import { describe, test, expect } from "vitest";

describe("Graph", () => {
  test("버텍스를 추가하면 버텍스를 키로 갖고 빈 배열을 값으로 갖음", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    expect(graph.getList).toEqual({ foo: [] });
  });

  test("이미 있는 버텍스를 추가하면 덮어쓰기를 막음", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    expect(graph.addVertex("foo")).toBeNull();
  });

  test("엣지를 추가할 수 있습니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addEdge("foo", "bar");
    expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  });

  test("엣지를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addVertex("baz");
    graph.addEdge("foo", "bar"); // { foo: ["bar"], bar: ["foo"] }
    graph.addEdge("baz", "bar"); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
    graph.addEdge("foo", "baz"); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
    graph.removeEdge("foo", "bar"); // { baz: ["bar", "foo"], bar: ["baz"], foo: ["baz"] }
    expect(graph.getList).toEqual({
      baz: ["bar", "foo"],
      bar: ["baz"],
      foo: ["baz"],
    });
  });

  test("버텍스를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addVertex("baz");
    graph.addEdge("foo", "bar"); // { foo: ["bar"], bar: ["foo"] }
    graph.addEdge("baz", "bar"); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
    graph.addEdge("foo", "baz"); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
    graph.removeVertex("baz");
    expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  });

  test("1개의 버텍스트를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.removeVertex("foo");
    expect(graph.getList).toEqual({});
  });
});

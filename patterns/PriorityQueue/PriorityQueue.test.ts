import { PriorityQueue } from "./PriorityQueue";
import { test, expect, describe } from "vitest";

describe("PriorityQueue - Enqueue", () => {
  test("루트", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 1);
    expect(priorityQueue.queueValues).toEqual(["foo"]);
  });

  test("2단계", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 3);
    priorityQueue.Enqueue("bar", 2);
    priorityQueue.Enqueue("baz", 1);
    expect(priorityQueue.queueValues).toEqual(["baz", "foo", "bar"]);
  });

  test("3단계", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(100, 20);
    priorityQueue.Enqueue(35, 10);
    priorityQueue.Enqueue(75, 15);
    priorityQueue.Enqueue(25, 5);
    priorityQueue.Enqueue(5, 2);
    priorityQueue.Enqueue(15, 3);
    priorityQueue.Enqueue(0, 1);
    expect(priorityQueue.queueValues).toEqual([0, 25, 5, 100, 35, 75, 15]);
  });
});

describe("PriorityQueue - Dequeue", () => {
  test("루트 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 1);
    expect(priorityQueue.Dequeue()).toBe("foo");
    expect(priorityQueue.queueValues).toEqual([]);
  });

  test("2단계 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(3, 3);
    priorityQueue.Enqueue(2, 2);
    priorityQueue.Enqueue(1, 1);
    expect(priorityQueue.queueValues).toEqual([1, 3, 2]);
    expect(priorityQueue.Dequeue()).toBe(1); // [1 / 3, 2] -> [2 / 3, 1] -> [2 / 3]
    expect(priorityQueue.queueValues).toEqual([2, 3]);
  });

  test("3단계 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(100, 100); // [100]
    priorityQueue.Enqueue(35, 35); // []
    priorityQueue.Enqueue(75, 75);
    priorityQueue.Enqueue(25, 25);
    priorityQueue.Enqueue(5, 5);
    priorityQueue.Enqueue(15, 15);
    priorityQueue.Enqueue(1, 1);
    expect(priorityQueue.queueValues).toEqual([1, 25, 5, 100, 35, 75, 15]);
    // [1, 25, 5, 100, 35, 75, 15]
    // -> [15, 25, 5, 100, 35, 75, 1]
    // -> [15, 25, 5, 100, 35, 75]
    // -> [5, 25, 15, 100, 35, 75]
    expect(priorityQueue.Dequeue()).toBe(1);
    expect(priorityQueue.queueValues).toEqual([5, 25, 15, 100, 35, 75]);
  });
});

import { test, expect, describe } from "vitest";
import Queue from "./QueueJS";

describe("Queue", () => {
  test("Enqueue", () => {
    const queue = new Queue();
    expect(queue.enqueue(10)).toBe(1);
    expect(queue.enqueue(20)).toBe(2);
    expect(queue.enqueue(30)).toBe(3);
  });

  test("Dequeue", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });

  test("Dequeue 1개", () => {
    const queue = new Queue();
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(null);
  });

  test("Dequeue 3개", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(null);
  });
});

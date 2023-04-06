// import { Node, SinglyLinkedList } from "./SinglyLinkedList";
import { test, expect, describe } from "vitest";
import { Stack, Node } from "./Stack";

describe("stack", () => {
  test("push", () => {
    const stack = new Stack<number>();
    expect(stack.push(10)).toBe(1);
    expect(stack.push(20)).toBe(2);
  });

  test("pop", () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(20);
    expect(stack.pop()?.val).toBe(20);
    expect(stack.pop()?.val).toBe(10);
  });
});

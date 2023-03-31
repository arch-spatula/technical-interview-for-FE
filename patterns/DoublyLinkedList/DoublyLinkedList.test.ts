import { DoublyLinkedList, Node } from "./DoublyLinkedList";
import { describe, test, expect } from "vitest";

describe("DoublyLinkedList - Node", () => {
  test("node에 값을 담을 수 있습니다.", () => {
    const firstNode = new Node(30);
    expect(firstNode.val).toBe(30);
  });

  test("다음 노드를 접근하고 이전 노드를 접근하면 동일한 노드를 얻습니다.", () => {
    const firstNode = new Node(30);
    firstNode.next = new Node(20);
    firstNode.next.prev = firstNode;
    expect(firstNode.next.prev).toEqual(firstNode);
  });
});

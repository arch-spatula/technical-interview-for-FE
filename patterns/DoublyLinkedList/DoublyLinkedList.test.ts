import { DoublyLinkedList, Node } from "./DoublyLinkedList";
import { describe, test, expect } from "vitest";

describe("DoublyLinkedList - Node", () => {
  test("node에 값을 담을 수 있습니다.", () => {
    const firstNode = new Node(30);
    expect(firstNode.val).toBe(30);
  });

  test("다음 노드를 접근하고 이전 노드를 접근하면 동일한 노드를 얻습니다.", () => {
    const firstNode = new Node<number>(30);
    firstNode.next = new Node<number>(20);
    firstNode.next.prev = firstNode;
    expect(firstNode.next.prev).toEqual(firstNode);
  });
});

describe("push", () => {
  test("If the head property is null set the head and tail to be the newly created node", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();

    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head?.val).toBe(doublyLinkedList.tail?.val);
    expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);
  });

  test("If the head property is not null, set the next property on the tail to be that node", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head?.val).toBe(10);

    doublyLinkedList.push(20);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.tail?.val).toBe(20);

    doublyLinkedList.push(30);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.tail?.val).toBe(30);
  });

  test("동일한 참조형 확인", () => {
    const obj = {};
    const a = obj;
    const b = obj;
    expect(a).toBe(b);
  });
});

describe("pop", () => {
  // - Update the tail to be the previous Node.
  // - Set the newTail's next to null
  // - Decrement the length
  // - Return the value removed

  test("If there is no head, return null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    expect(doublyLinkedList.pop()).toBeNull();
  });

  test("If the length is 1, set the head and tail to be null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).toBe(1);
    doublyLinkedList.pop();
    expect(doublyLinkedList.tail).toBeNull();
  });

  test("If the length is 2, set the new tail's next to be null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20);
    expect(doublyLinkedList.length).toBe(2);
    doublyLinkedList.pop();
    expect(doublyLinkedList.tail?.val).toBe(10);
  });
});

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

describe("shift", () => {
  test("If length is 0, return null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.shift()).toBeNull();
  });

  test("If the length is one set the head and tail to be null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.shift()?.val).toBe(10);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
  });

  test("If the length is more then one set the next of the head to be the head", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20);
    expect(doublyLinkedList.length).toBe(2);
    doublyLinkedList.shift();
    expect(doublyLinkedList.tail?.val).toBe(20);
  });
});

describe("unshift", () => {
  test("If the length is 0", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    expect(doublyLinkedList.length).toBe(0);
    doublyLinkedList.unshift(10);
    expect(doublyLinkedList.head?.val).toBe(doublyLinkedList.tail?.val);
    expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);
  });

  test("If the length is more then 0", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.unshift(10).unshift(20);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.tail?.val).toBe(10);
    expect(doublyLinkedList.head?.val).toBe(20);
  });
});

describe("get", () => {
  test("If the index is less than 0 or greater or equal to the length, return null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50);
    expect(doublyLinkedList.get(-1)).toBe(null);
    expect(doublyLinkedList.get(5)).toBe(null);
  });

  test("If the index is less than or equal to half the length of the list return the node once it is found", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50);
    expect(doublyLinkedList.get(2)?.val).toBe(30);
  });

  test("If the index is greater than half the length of the list return the node once it is found", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.get(5)?.val).toBe(60);
    expect(doublyLinkedList.get(4)?.val).toBe(50);
    expect(doublyLinkedList.get(3)?.val).toBe(40);
  });
});

describe("set", () => {
  test("index 범위를 초과하면 false를 반환", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.set(7, 20)).toBe(false);
  });

  test("index 범위 내에 있으면 값을 갱신하고 true를 반환", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.set(2, 420)).toBe(true);
    expect(doublyLinkedList.get(2)?.val).toBe(420);
  });
});

describe("insert", () => {
  test("If the index is less than zero or greater than or equal to the length return false", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.insert(7, 70)).toBe(false);
  });

  test("If the index is 0, unshift", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.insert(0, 70)).toBe(true);
    expect(doublyLinkedList.get(0)?.val).toBe(70);
    expect(doublyLinkedList.length).toBe(7);
  });

  test("If the index is the same as the length, push", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.insert(doublyLinkedList.length, 70)).toBe(true);
    expect(doublyLinkedList.get(6)?.val).toBe(70);
    expect(doublyLinkedList.length).toBe(7);
  });

  test("insert in the middle", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.insert(3, 35)).toBe(true);
    expect(doublyLinkedList.get(3)?.val).toBe(35);
  });
});

describe("remove", () => {
  test("If the index is less than zero or greater than or equal to the length return null", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.remove(-1)).toBe(null);
    expect(doublyLinkedList.remove(7)).toBe(null);
  });

  test("If the index is 0, shift", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.remove(0)?.val).toBe(10);
    expect(doublyLinkedList.length).toBe(5);
  });

  test("If the index is the same as the length-1, pop", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.remove(doublyLinkedList.length - 1)?.val).toBe(60);
    expect(doublyLinkedList.length).toBe(5);
  });

  test("remove in the middle", () => {
    const doublyLinkedList = new DoublyLinkedList<number>();
    doublyLinkedList.push(10).push(20).push(30).push(40).push(50).push(60);
    expect(doublyLinkedList.remove(3)?.val).toBe(40);
    expect(doublyLinkedList.length).toBe(5);
  });
});

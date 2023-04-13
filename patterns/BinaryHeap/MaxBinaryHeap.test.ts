import { test, expect, describe } from "vitest";
import { MaxBinaryHeap } from "./MaxBinaryHeap";

describe("Max Binary Heap", () => {
  test("최초 생성하면 빈 배열", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    expect(maxBinaryHeap.getValues()).toEqual([]);
  });
  test("빈 배열에 insert하면 root자리 확보", () => {
    const maxBinaryHeap = new MaxBinaryHeap<number>();
    maxBinaryHeap.insert(41);
    expect(maxBinaryHeap.getValues()).toEqual([41]);
  });

  test("배열에 버블링 없이 추가", () => {
    const maxBinaryHeap = new MaxBinaryHeap<number>();
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    expect(maxBinaryHeap.getValues()).toEqual([41, 18, 33]);
  });

  test("배열에 버블링 1단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap<number>();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    // maxBinaryHeap.insert(41);
    expect(maxBinaryHeap.getValues()).toEqual([33, 18]);
  });

  test("배열에 버블링 2단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap<number>();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    expect(maxBinaryHeap.getValues()).toEqual([55, 41, 33, 18]);
  });

  test("배열에 버블링 3단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap<number>();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    maxBinaryHeap.insert(63);
    maxBinaryHeap.insert(22);
    maxBinaryHeap.insert(13);
    maxBinaryHeap.insert(94);
    expect(maxBinaryHeap.getValues()).toEqual([94, 63, 33, 55, 41, 22, 13, 18]);
  });

  // 값의 중복 예외처리
  test("");
});

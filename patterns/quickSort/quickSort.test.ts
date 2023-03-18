import { quickSort, swap, pivot } from "./quickSort";
import { test, expect, describe } from "vitest";

describe("퀵 정렬을 구현합니다.", () => {
  test("배열의 원소 자리를 바꿉니다.", () => {
    const arr = [2, 3];
    swap(arr, 0, 1);
    expect(arr).toEqual([3, 2]);
  });

  test("[5, 3, 4, 1, 2] -> [2, 3, 4, 1, 5]으로 pivot합니다.", () => {
    const arr = [5, 3, 4, 1, 2];
    expect(pivot(arr)).toBe(4);
    expect(arr).toEqual([2, 3, 4, 1, 5]);
  });

  test("5, 2, 1, 8, 4, 7, 6, 3 -> 3, 2, 1, 4, 5, 7, 6, 8", () => {
    const arr = [5, 2, 1, 8, 4, 7, 6, 3];
    // 5, 2, 1, 4, 8, 7, 6, 3 | 8은 오른쪽 3은 왼쪽
    // 5, 2, 1, 4, 3, 7, 6, 8 | pivotIdx는 5
    // 3, 2, 1, 4, 5, 7, 6, 8 | 3과 5 교체
    expect(pivot(arr)).toBe(4);
    expect(arr).toEqual([3, 2, 1, 4, 5, 7, 6, 8]);
  });

  test("4, 8, 2, 1, 5, 7, 6, 3 -> 3, 2, 1, 4, 5, 7, 6, 8", () => {
    const arr = [4, 8, 2, 1, 5, 7, 6, 3];
    expect(pivot(arr)).toBe(3);
    expect(arr).toEqual([3, 2, 1, 4, 5, 7, 6, 8]);
  });

  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(quickSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});

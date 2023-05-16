import bubbleSort from "./bubbleSortJS";
import { test, expect, describe } from "vitest";

describe("버블 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("배열 2.", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(bubbleSort(arr)).toEqual([
      4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637,
    ]);
  });
});

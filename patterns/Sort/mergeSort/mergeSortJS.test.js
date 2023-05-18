import mergeSort, { merge } from "./mergeSortJS";
import { test, expect, describe } from "vitest";

describe("병합 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(mergeSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("merge 1", () => {
    expect(merge([2, 4, 5], [3])).toEqual([2, 3, 4, 5]);
  });
});

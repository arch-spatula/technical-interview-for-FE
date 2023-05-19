import { test, expect, describe } from "vitest";
import radixSort, { getDigit } from "./radixSortJS";

describe("지수 정렬을 구현합니다.", () => {
  test("radixSort를 구현합니다.", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(radixSort(arr)).toEqual([
      4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637,
    ]);
  });

  test("getDigit 1", () => {
    expect(getDigit(234, 0)).toBe(4);
  });

  test("getDigit 2", () => {
    expect(getDigit(234, 4)).toBe(0);
  });

  test("getDigit 3", () => {
    expect(getDigit(234, 1)).toBe(3);
  });

  test("getDigit 4", () => {
    expect(getDigit(234, 2)).toBe(2);
  });

  test("getDigit 4", () => {
    expect(getDigit(234, undefined)).toBeNaN(2);
  });
});

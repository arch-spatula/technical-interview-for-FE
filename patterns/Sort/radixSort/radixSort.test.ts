import { radixSort, getDigit, digitCount } from "./radixSort";
import { test, expect, describe } from "vitest";

describe("지수 정렬을 위한 헬퍼 함수들을 구현합니다.", () => {
  test("getDitgit으로 일의 자릿수의 값을 구합니다.", () => {
    expect(getDigit(12345, 0)).toBe(5);
  });

  test("getDitgit으로 존재하지 않는 백의 자릿수의 값을 구합니다.", () => {
    expect(getDigit(12, 3)).toBe(0);
  });

  test("digitCount로 자릿수를 구합니다.", () => {
    expect(digitCount(314)).toBe(3);
  });
});

describe("지수 정렬을 구현합니다.", () => {
  test("radixSort를 구현합니다.", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(radixSort(arr)).toEqual([
      4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637,
    ]);
  });
});

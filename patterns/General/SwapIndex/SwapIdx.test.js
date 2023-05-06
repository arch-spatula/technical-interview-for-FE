import swapIdx from "./SwapIdx";
import { describe, test, expect } from "vitest";

describe("swapIdx", () => {
  test("a = 1, b = 3을 a = 3; b = 1로 바꿉니다.", () => {
    let a = 1;
    let b = 3;
    const aOriginVal = a;
    const bOriginVal = b;

    const arr = [a, b];
    swapIdx(arr, 0, 1);

    expect(arr[0]).toBe(bOriginVal);
    expect(arr[1]).toBe(aOriginVal);
  });
});

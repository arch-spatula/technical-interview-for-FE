import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("배열의 개수를 셉니다.", () => {
  test("배열에서 1 2개를 찾습니다.", () => {
    expect(solution([1, 1, 2, 3, 4, 5], 1)).toBe(2);
  });
  test("배열에서 1을 못찾습니다.", () => {
    expect(solution([0, 2, 3, 4], 1)).toBe(0);
  });
});

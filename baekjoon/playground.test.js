import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("동작 여부 확인", () => {
  test("동작 여부 확인", () => {
    expect(solution(5, 8, 4)).toEqual([1, 1, 0, 0]);
  });
});

import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("외계어 사전", () => {
  test("예제 1", () => {
    expect(solution("<", "=", 20, 50, 1)).toBe(1);
  });

  test("예제 2", () => {
    expect(solution(">", "!", 41, 78, 0)).toBe(0);
  });
});

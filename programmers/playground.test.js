import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("숫자의 표현", () => {
  test("예제 1", () => {
    expect(solution(15)).toBe(4);
  });
});

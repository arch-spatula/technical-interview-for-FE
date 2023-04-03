import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램", () => {
  test("1 ~ 3", () => {
    expect(solution(3)).toBe(6);
  });

  test("1 ~ 10", () => {
    expect(solution(10)).toBe(55);
  });
});

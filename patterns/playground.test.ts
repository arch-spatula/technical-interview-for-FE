import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("순진한 문자열 탐색을 구현합니다.", () => {
  test("1부터 5중 2의 인덱스가 1이라고 찾습니다.", () => {
    expect(solution("adfs", "a")).toBe(1);
  });
});

import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("순진한 문자열 탐색을 구현합니다.", () => {
  test("wowomgzomg에서 omg 2개를 찾습니다.", () => {
    expect(solution("wowomgzomg", "omg")).toBe(2);
  });
});

import { test, expect, describe } from "vitest";
import solution from "./181841";

describe("배포마다 몇 개의 기능이 배포되는지를 return", () => {
  test("예제 1", () => {
    expect(solution(["abc", "def", "ghi"], "ef")).toBe("abcghi");
  });

  test("리스트 안의 모든 문자열이 'c'를 포함하므로 빈 문자열을 return합니다.", () => {
    expect(solution(["abc", "bbc", "cbc"], "c")).toBe("");
  });
});

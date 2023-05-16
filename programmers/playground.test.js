import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("JadenCase 문자열 만들기", () => {
  test("예제 1", () => {
    expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me");
  });

  test("예제 2", () => {
    expect(solution("for the last week")).toBe("For The Last Week");
  });

  test("공백 2칸", () => {
    expect(solution("abc def")).toBe("Abc Def");
  });

  test("첫글자가 아니면 소문자", () => {
    expect(solution("aBC")).toBe("Abc");
  });
});

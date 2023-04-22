import { isGroupWord, solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램", () => {
  test('"happy", "new", "year"', () => {
    expect(solution(3, ["happy", "new", "year"])).toBe(3);
  });

  test('"aba", "abab", "abcabc", "a"', () => {
    expect(solution(4, ["aba", "abab", "abcabc", "a"])).toBe(1);
  });

  test('"ab", "aa", "aca", "ba", "bb"', () => {
    expect(solution(5, ["ab", "aa", "aca", "ba", "bb"])).toBe(4);
  });

  test('"yzyzy", "zyzyz"', () => {
    expect(solution(2, ["yzyzy", "zyzyz"])).toBe(0);
  });

  test('"z"', () => {
    expect(solution(1, ["z"])).toBe(1);
  });

  test('"a", "aba"', () => {
    expect(solution(2, ["a", "aba"])).toBe(1);
  });
});

describe("isGroupWord", () => {
  test("true - a", () => {
    expect(isGroupWord("a")).toBe(true);
  });

  test("false - aba", () => {
    expect(isGroupWord("aba")).toBe(false);
  });

  test("true - aab", () => {
    expect(isGroupWord("aab")).toBe(true);
  });
});

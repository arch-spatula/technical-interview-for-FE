import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("정규 표현식 활용하기", () => {
  test("예제 1", () => {
    expect(solution("a234")).toBe(false);
  });

  test("예제 2", () => {
    expect(solution("1234")).toBe(true);
  });

  test("길이는 맞지만 문자가 있음", () => {
    expect(solution("1234a")).toBe(false);
  });

  test("모두 숫자 길이 미달", () => {
    expect(solution("123")).toBe(false);
  });

  test("5자리는 해당하지 않습니다", () => {
    expect(solution("12356")).toBe(false);
  });

  test("모두 문자 길이 미달", () => {
    expect(solution("abc")).toBe(false);
  });

  test("모두 숫자 길이 초과", () => {
    expect(solution("1234567")).toBe(false);
  });

  test("모두 문자 길이 초과", () => {
    expect(solution("asdfghj")).toBe(false);
  });
});

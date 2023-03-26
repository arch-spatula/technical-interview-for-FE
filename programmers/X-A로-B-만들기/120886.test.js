import { test, expect, describe } from "vitest";
import solution from "./120886";

describe("영어 소문자로 바꾼 문자열을 return", () => {
  test('"olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.', () => {
    expect(solution("olleh", "hello")).toBe(1);
  });

  test('"allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.', () => {
    expect(solution("allpe", "apple")).toBe(0);
  });
});

import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램", () => {
  test("글자를 출력", () => {
    expect(solution("pulljima")).toBe(8);
  });
  test("글자를 출력", () => {
    expect("pulljima".length).toBe(8);
  });
});

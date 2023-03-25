import { solution, createMemo, shallowCompare } from "./playground";
import { test, expect, describe } from "vitest";

describe("영어 소문자로 바꾼 문자열을 return", () => {
  test('"olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.', () => {
    expect(solution("olleh", "hello")).toBe(1);
  });

  test('"allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.', () => {
    expect(solution("allpe", "apple")).toBe(0);
  });
});

describe("createMemo", () => {
  test("aab는 {a:2, b:1}", () => {
    expect(createMemo("aab")).toEqual({ a: 2, b: 1 });
  });

  test("olleh { h: 1, o: 1, e: 1, l: 2 }", () => {
    expect(createMemo("olleh")).toEqual({ h: 1, o: 1, e: 1, l: 2 });
  });
});

describe("shallowCompare", () => {
  test("얕은 비교로 같은경우", () => {
    expect(shallowCompare({ a: 2, b: 1 }, { b: 1, a: 2 })).toBe(true);
  });

  test("얕은 비교로 다른경우", () => {
    expect(shallowCompare({ a: 2, c: 1 }, { b: 1, a: 2 })).toBe(false);
  });
});

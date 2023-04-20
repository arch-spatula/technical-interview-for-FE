import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램", () => {
  test("유스케이스", () => {
    expect(solution("The Curious Case of Benjamin Button")).toBe(6);
  });
  test("앞에 공백", () => {
    expect(solution(" The Curious Case of Benjamin Button")).toBe(6);
  });
  test("뒤에 공백", () => {
    expect(solution("The Curious Case of Benjamin Button ")).toBe(6);
  });
});

import { solution } from "./120848";
import { test, expect, describe } from "vitest";

describe("배열의 개수를 셉니다.", () => {
  test("10!은 10을 반환합니다.", () => {
    expect(solution(3628800)).toBe(10);
  });

  test("7은 3!이상 4!미만으로 3을 반환합니다.", () => {
    expect(solution(7)).toBe(3);
  });
});

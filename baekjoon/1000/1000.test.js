import { describe, test, expect } from "vitest";
import { solution } from "./1000";

describe("두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.", () => {
  test("첫째 줄에 A와 B가 주어진다. (0 < A, B < 10), 첫째 줄에 A+B를 출력한다.", () => {
    expect(solution(1, 2)).toBe(3);
  });
});

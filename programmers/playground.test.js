import solution from "./playground";
import { test, expect, describe } from "vitest";

// q	r	code	result
// 3	1	"qjnwezgrpirldywt"	"jerry"
// 1	0	"programmers"	"programmers"

describe("최솟값 만들기", () => {
  test("예제 1", () => {
    expect(solution(3, 1, "qjnwezgrpirldywt")).toBe("jerry");
  });

  test("예제 2", () => {
    expect(solution(1, 0, "programmers")).toBe("programmers");
  });
});

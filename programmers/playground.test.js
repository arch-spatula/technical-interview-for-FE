import solution, { process } from "./playground";
import { test, expect, describe } from "vitest";

// s	result
// "110010101001"	[3,8]
// "01110"	[3,3]
// "1111111"	[4,1]

describe("이진 변환 반복하기", () => {
  test("예제 1", () => {
    expect(solution("110010101001")).toEqual([3, 8]);
  });

  test("예제 2", () => {
    expect(solution("01110")).toEqual([3, 3]);
  });

  test("예제 3", () => {
    expect(solution("1111111")).toEqual([4, 1]);
  });

  test("process 1", () => {
    expect(process("110010101001")).toEqual(["110", 6]);
  });

  test("process 2", () => {
    expect(process("110")).toEqual(["10", 1]);
  });

  test("process 3", () => {
    expect(process("10")).toEqual(["1", 1]);
  });
});

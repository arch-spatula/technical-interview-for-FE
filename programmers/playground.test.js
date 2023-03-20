import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("안의 모든 자연수들의 합을 return하도록 solution 함수를 구현합니다.", () => {
  test("'aAb1B2cC34oOp'안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.", () => {
    expect(solution("aAb1B2cC34oOp")).toBe(10);
  });
  test("'1a2b3c4d123Z'안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.", () => {
    expect(solution("1a2b3c4d123")).toBe(16);
  });
});

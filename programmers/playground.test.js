import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("두 이진수의 합을 return", () => {
  // bin1	bin2	result
  // "10"	"11"	"101"
  // "1001"	"1111"	"11000"
  test('10 + 11 = 101 이므로 "101" 을 return합니다.', () => {
    expect(solution("10", "11")).toBe("101");
  });

  test('1001 + 1111 = 11000 이므로 "11000"을 return합니다.', () => {
    expect(solution("1001", "1111")).toBe("11000");
  });

  test('1001 + 1111 = 11000 이므로 "11000"을 return합니다.', () => {
    expect(solution("1", "1")).toBe("10");
  });
});

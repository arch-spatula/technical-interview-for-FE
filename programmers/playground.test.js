import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("배포마다 몇 개의 기능이 배포되는지를 return", () => {
  test("예제 1", () => {
    expect(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])).toBe(
      "wsdawsdassw"
    );
  });
});

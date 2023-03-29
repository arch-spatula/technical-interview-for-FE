import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return", () => {
  test(`
    1번은 첫 번째로 3번에게 공을 던집니다.
    3번은 두 번째로 1번에게 공을 던집니다.
  `, () => {
    expect(solution([1, 2, 3, 4], 2)).toBe(3);
  });

  test(`
    1번은 첫 번째로 3번에게 공을 던집니다.
    3번은 두 번째로 5번에게 공을 던집니다.
    5번은 세 번째로 1번에게 공을 던집니다.
    1번은 네 번째로 3번에게 공을 던집니다.
    3번은 다섯 번째로 5번에게 공을 던집니다.
  `, () => {
    expect(solution([1, 2, 3, 4, 5, 6], 5)).toBe(3);
  });

  test(`
    1번은 첫 번째로 3번에게 공을 던집니다.
    3번은 두 번째로 2번에게 공을 던집니다.
    2번은 세 번째로 1번에게 공을 던집니다.
  `, () => {
    expect(solution([1, 2, 3], 3)).toBe(2);
  });
});

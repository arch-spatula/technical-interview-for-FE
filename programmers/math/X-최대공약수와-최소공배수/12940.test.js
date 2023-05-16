import { test, expect, describe } from "vitest";
import solution, { gcd, lcm } from "./12940";

describe("최대공약수와 최소공배수", () => {
  test("예제 1", () => {
    expect(solution(3, 12)).toEqual([3, 12]);
  });

  test("예제 2", () => {
    expect(solution(2, 5)).toEqual([1, 10]);
  });

  test("최대공약수(Greatest Common Divisor, GCD) - 1", () => {
    expect(gcd(72, 90)).toBe(18);
  });

  test("최소공배수(Lowest Common Multiple, LCM) - 1", () => {
    expect(lcm(24, 30)).toBe(120);
  });

  test("최대공약수(Greatest Common Divisor, GCD) - 2", () => {
    expect(gcd(60, 48)).toBe(12);
  });

  test("최소공배수(Lowest Common Multiple, LCM) - 2", () => {
    expect(lcm(60, 48)).toBe(240);
  });
});

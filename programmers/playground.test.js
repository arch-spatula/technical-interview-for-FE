import solution, { getIntersection, getUnion } from './playground';
import { test, expect, describe } from 'vitest';

// k	dungeons	                result
// 80	[[80,20],[50,40],[30,10]]	3

describe('day 1', () => {
  test('예제 1', () => {
    expect(
      solution(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
eightwo
dsxnfkjn2vtwofivethree2`)
    ).toBe(385);
  });
});

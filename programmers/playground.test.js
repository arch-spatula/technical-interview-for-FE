import solution, { getIntersection, getUnion } from './playground';
import { test, expect, describe } from 'vitest';

// k	dungeons	                result
// 80	[[80,20],[50,40],[30,10]]	3

describe('피로도', () => {
  test('예제 1', () => {
    expect(
      solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
      ])
    ).toBe(3);
  });
});

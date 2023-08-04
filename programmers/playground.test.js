import solution from './playground';
import { test, expect, describe } from 'vitest';

// rank	                  attendance	                                  result
// [3, 7, 2, 5, 4, 6, 1]	[false, true, true, true, true, false, false]	20403
// [1, 2, 3]	            [true, true, true]	                          102
// [6, 1, 5, 2, 3, 4]	    [true, false, true, false, false, true]	      50200

describe('전국 대회 선발 고사', () => {
  test('예제 1', () => {
    expect(
      solution(
        [3, 7, 2, 5, 4, 6, 1],
        [false, true, true, true, true, false, false]
      )
    ).toBe(20403);
  });
  test('예제 2', () => {
    expect(solution([1, 2, 3], [true, true, true])).toBe(102);
  });
  test('예제 3', () => {
    expect(
      solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
    ).toBe(50200);
  });
});

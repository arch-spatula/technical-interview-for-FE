import solution from './playground';
import { test, expect, describe } from 'vitest';

// rank	                  attendance	                                  result
// [3, 7, 2, 5, 4, 6, 1]	[false, true, true, true, true, false, false]	20403
// [1, 2, 3]	            [true, true, true]	                          102
// [6, 1, 5, 2, 3, 4]	    [true, false, true, false, false, true]	      50200

describe('시저 암호', () => {
  test('예제 1', () => {
    expect(solution(2)).toBe(1);
  });
  test('예제 2', () => {
    expect(solution(3)).toBe(2);
  });
  test('예제 3', () => {
    expect(solution(4)).toBe(3);
  });
  test('예제 4', () => {
    expect(solution(5)).toBe(5);
  });
  test('예제 5', () => {
    expect(solution(1500)).toBe(1_058_440);
  });
  test('예제 6', () => {
    expect(solution(6)).toBe(8);
  });
  test('예제 7', () => {
    expect(solution(65)).toBe(117388);
  });
});

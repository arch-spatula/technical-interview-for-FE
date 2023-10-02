import solution from './playground';
import { test, expect, describe } from 'vitest';

// common	      result
// [1, 2, 3, 4]	5
// [2, 4, 8]	  16

describe('다음에 올 숫자', () => {
  test('예제 1', () => {
    expect(solution([1, 2, 3, 4])).toBe(5);
  });
  test('예제 2', () => {
    expect(solution([2, 4, 8])).toBe(16);
  });
  test('예제 2', () => {
    expect(solution([2, -4, 8])).toBe(-16);
  });
});

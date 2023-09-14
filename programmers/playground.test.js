import solution from './playground';
import { test, expect, describe } from 'vitest';

// citations	      return
// [3, 0, 6, 1, 5]	3

describe('n^2 배열 자르기', () => {
  test('예제 1', () => {
    expect(solution([3, 0, 6, 1, 5])).toBe(3);
  });
  test('예제 2', () => {
    expect(solution([0, 0, 0])).toBe(0);
  });
  test('예제 3', () => {
    expect(solution([6, 5, 5, 5, 3, 2, 1, 0])).toBe(4);
  });
  test('예제 4', () => {
    expect(solution([1, 4, 5])).toBe(2);
  });
  test('예제 5', () => {
    expect(solution([5, 6, 7])).toBe(3);
  });
});

import solution from './playground';
import { test, expect, describe } from 'vitest';

// people	          limit	return
// [70, 50, 80, 50]	100	  3
// [70, 80, 50]	    100	  3

describe('구명보트', () => {
  test('예제 1', () => {
    expect(solution([70, 50, 80, 50], 100)).toBe(3);
  });
  test('예제 2', () => {
    expect(solution([70, 80, 50], 100)).toBe(3);
  });
  test('예제 3', () => {
    expect(solution([60, 80, 40], 100)).toBe(2);
  });
  test('예제 4', () => {
    expect(solution([45, 47, 49, 50, 80], 100)).toBe(3);
  });
});

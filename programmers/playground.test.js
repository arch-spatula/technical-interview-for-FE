import solution from './playground';
import { test, expect, describe } from 'vitest';

// a	b	  result
// 7	20	1
// 11	22	1
// 12	21	2

describe('유한소수 판별하기', () => {
  test('예제 1', () => {
    expect(solution(7, 20)).toBe(1);
  });
  test('예제 2', () => {
    expect(solution(11, 22)).toBe(1);
  });
  test('예제 3', () => {
    expect(solution(12, 21)).toBe(2);
  });
});

import solution from './playground';
import { test, expect, describe } from 'vitest';

// n	result
// 4	5
// 3	3

describe('멀리 뛰기', () => {
  test('예제 1', () => {
    expect(solution(4)).toBe(5);
  });
  test('예제 2', () => {
    expect(solution(3)).toBe(3);
  });
  test('예제 3', () => {
    expect(solution(1)).toBe(1);
  });
  test('예제 4', () => {
    expect(solution(2)).toBe(2);
  });
  test('예제 5', () => {
    expect(solution(2000)).toBe(694725);
  });
});

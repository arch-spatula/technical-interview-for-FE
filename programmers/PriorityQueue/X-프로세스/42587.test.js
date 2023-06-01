import solution from './42587';
import { test, expect, describe } from 'vitest';

describe('프로세스', () => {
  test('예제 1', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
  });
  test('예제 1', () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });
});

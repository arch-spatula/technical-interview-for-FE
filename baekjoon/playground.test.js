import { solution } from './playground';
import { test, expect, describe } from 'vitest';

describe('N 찍기', () => {
  test('예제 1', () => {
    expect(solution(5)).toBe(`${12} ${18}`);
  });
});

import { solution } from './playground';
import { test, expect, describe } from 'vitest';

describe('N 찍기', () => {
  test('예제 1', () => {
    expect(solution(1, 100)).toBe(50);
  });
  test('예제 2', () => {
    expect(solution(2, 7)).toBe(2);
  });
  test('예제 3', () => {
    expect(solution(10, 9)).toBe(0);
  });
  test('예제 4', () => {
    expect(solution(10, 10)).toBe(0);
  });
});

import solution from './playground';
import { test, expect, describe } from 'vitest';
// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// F(6) = F(4) + F(5) = 3 + 5 = 8

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

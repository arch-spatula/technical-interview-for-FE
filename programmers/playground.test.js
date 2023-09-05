import solution, { sumWindow } from './playground';
import { test, expect, describe } from 'vitest';

describe('연속 부분 수열 합의 개수', () => {
  test('예제 1', () => {
    expect(solution([7, 9, 1, 1, 4])).toBe(18);
  });
});

describe('sumWindow', () => {
  test('1개', () => {
    expect(sumWindow(0, 1, [7, 9, 1, 1, 4])).toBe(7);
    expect(sumWindow(1, 1, [7, 9, 1, 1, 4])).toBe(9);
    expect(sumWindow(2, 1, [7, 9, 1, 1, 4])).toBe(1);
    expect(sumWindow(3, 1, [7, 9, 1, 1, 4])).toBe(1);
    expect(sumWindow(4, 1, [7, 9, 1, 1, 4])).toBe(4);
  });
  test('2개', () => {
    expect(sumWindow(0, 2, [7, 9, 1, 1, 4])).toBe(16);
    expect(sumWindow(1, 2, [7, 9, 1, 1, 4])).toBe(10);
    expect(sumWindow(2, 2, [7, 9, 1, 1, 4])).toBe(2);
    expect(sumWindow(3, 2, [7, 9, 1, 1, 4])).toBe(5);
    expect(sumWindow(4, 2, [7, 9, 1, 1, 4])).toBe(11);
  });
  test('3개', () => {
    expect(sumWindow(0, 3, [7, 9, 1, 1, 4])).toBe(17);
    expect(sumWindow(1, 3, [7, 9, 1, 1, 4])).toBe(11);
    expect(sumWindow(2, 3, [7, 9, 1, 1, 4])).toBe(6);
    expect(sumWindow(3, 3, [7, 9, 1, 1, 4])).toBe(12);
    expect(sumWindow(4, 3, [7, 9, 1, 1, 4])).toBe(20);
  });
});

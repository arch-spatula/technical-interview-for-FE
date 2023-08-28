import solution from './playground';
import { test, expect, describe } from 'vitest';

// arr	      result
// [2,6,8,14]	168
// [1,2,3]	  6

describe('N개의 최소공배수', () => {
  test('예제 1', () => {
    expect(solution([2, 6, 8, 14])).toBe(168);
  });
  test('예제 2', () => {
    expect(solution([1, 2, 3])).toBe(6);
  });
  test('예제 3', () => {
    expect(solution([2, 7])).toBe(14);
  });
  test('예제 4', () => {
    expect(solution([12, 32, 45, 67, 72])).toBe(96480);
  });
  test('예제 5', () => {
    expect(solution([17, 34])).toBe(34);
  });
  test('예제 6', () => {
    expect(solution([4, 4])).toBe(4);
  });
});

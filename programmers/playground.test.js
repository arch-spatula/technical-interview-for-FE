import solution, { isPrime } from './playground';
import { test, expect, describe } from 'vitest';

// n	result
// 10	4
// 5	3

describe('소수 만들기', () => {
  test('예제 1', () => {
    expect(solution(10)).toBe(4);
  });

  test('예제 2', () => {
    expect(solution(5)).toBe(3);
  });
});

describe('helper', () => {
  test('소수 맞음', () => {
    expect(isPrime(7)).toBe(true);
  });
  test('소수 아님', () => {
    expect(isPrime(6)).toBe(false);
  });
});

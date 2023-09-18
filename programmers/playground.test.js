import solution from './playground';
import { test, expect, describe } from 'vitest';

describe('의상', () => {
  test('예제 1', () => {
    expect(
      solution([
        ['yellow_hat', 'headgear'],
        ['blue_sunglasses', 'eyewear'],
        ['green_turban', 'headgear'],
      ])
      // 2개 중 1개 + 1개 중 1개 = 2
      // 1개 중 1개 = 3
      // 3C1 전체 중 1개 = 3
      // 2개의 키로 2C1 = 2

      // 2C1 + 1C1 = 3
      // 2C1 * 1C1 = 2
    ).toBe(5);
  });

  test('예제 2', () => {
    expect(
      solution([
        ['crow_mask', 'face'],
        ['blue_sunglasses', 'face'],
        ['smoky_makeup', 'face'],
      ])
      // 3개 중 1개 = 3 3C1
    ).toBe(3);
  });

  test('예제 3', () => {
    expect(
      solution([
        ['crow_mask', 'foo'],
        ['blue_sunglasses', 'bar'],
        ['smoky_makeup', 'baz'],
      ])
      // 3개 중 1개 = 3 3C1
      // 3개 중 2개 = 3 3C2
      // 3개 중 3개 = 1 3C3
    ).toBe(7);
  });
});

// AB CD EF
// A B C D E F
// AC AD AE AF BC BD BE BF CE CF DE DF
// ACE ACF ADE ADF BCE BCF BDE BDF

import solution from './42587';
import { test, expect, describe } from 'vitest';

describe('프로세스', () => {
  test('예제 1', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
    // [2-A, 1-B, 3-C, 2-D]
    // [1-B, 3-C, 2-D, 2-A]
    // [3-C, 2-D, 2-A, 1-B]
    // 2는 C이고 첫번째(1)로 실행됩니다.
  });

  test('예제 2', () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
    // [1-A, 1-B, 9-C, 1-D, 1-E, 1-F]
    // [1-B, 9-C, 1-D, 1-E, 1-F, 1-A]
    // [9-C, 1-D, 1-E, 1-F, 1-A, 1-B]
    // 0은 A이다. 5번째로 실행됩니다.
  });

  test('예제 3', () => {
    expect(solution([2, 1, 2, 1, 2, 1, 2, 1, 2], 1)).toBe(6);
    // [A-2, B-1, C-2, D-1, E-2, F-1, G-2, H-1, I-2]
    // [B-1, C-2, D-1, E-2, F-1, G-2, H-1, I-2, A-2]
    // ...
    // [A-2, C-2, E-2, G-2, I-2, B-1, D-1, F-1, H-1]
    // [A-2-1, C-2-2, E-2-3, G-2-4, I-2-5, B-1-6, D-1-7, F-1-8, H-1-9]
    // 1=B -> 6
  });
});

import solution from './playground';
import { test, expect, describe } from 'vitest';

// 캐시크기(cacheSize)	도시이름(cities)	실행시간
// 2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
// 0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25

describe('n^2 배열 자르기', () => {
  test('예제 1', () => {
    expect(
      solution(3, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
      ])
    ).toBe(50);
  });
  test('예제 2', () => {
    expect(
      solution(3, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
        'Jeju',
        'Pangyo',
        'Seoul',
      ])
    ).toBe(21);
  });
  test('예제 3', () => {
    expect(
      solution(2, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'SanFrancisco',
        'Seoul',
        'Rome',
        'Paris',
        'Jeju',
        'NewYork',
        'Rome',
      ])
    ).toBe(60);
  });
  test('예제 4', () => {
    expect(
      solution(5, [
        'Jeju',
        'Pangyo',
        'Seoul',
        'NewYork',
        'LA',
        'SanFrancisco',
        'Seoul',
        'Rome',
        'Paris',
        'Jeju',
        'NewYork',
        'Rome',
      ])
    ).toBe(52);
  });
  test('예제 5', () => {
    expect(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])).toBe(16);
  });
  test('예제 6', () => {
    expect(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(25);
  });
  test('test', () => {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1);
    arr.unshift(3);
    expect(arr).toEqual([3, 1, 2, 4, 5]);
  });
});

import { solution } from './playground';
import { test, expect, describe } from 'vitest';

describe('N 찍기', () => {
  test('예제 1', () => {
    expect(solution()).toBe(`.  .   .
|  | _ | _. _ ._ _  _
|/\|(/.|(_.(_)[ | )(/.`);
  });
  test('예제 2', () => {
    expect(solution('aaah', 'ah')).toBe();
  });
});

import solution from './playground';
import { test, expect, describe } from 'vitest';

// n	words	result
// 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
// 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
// 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]

describe('카펫', () => {
  test('예제 1', () => {
    expect(
      solution(3, [
        'tank',
        'kick',
        'know',
        'wheel',
        'land',
        'dream',
        'mother',
        'robot',
        'tank',
      ])
    ).toEqual([3, 3]);
  });
  test('예제 2', () => {
    expect(
      solution(5, [
        'hello',
        'observe',
        'effect',
        'take',
        'either',
        'recognize',
        'encourage',
        'ensure',
        'establish',
        'hang',
        'gather',
        'refer',
        'reference',
        'estimate',
        'executive',
      ])
    ).toEqual([0, 0]);
  });
  test('예제 3', () => {
    expect(
      solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
    ).toEqual([1, 3]);
  });
});

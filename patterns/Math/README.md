## 배열 내 조합

```js
function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}
console.log([1, 2, 3, 4], 2);
```

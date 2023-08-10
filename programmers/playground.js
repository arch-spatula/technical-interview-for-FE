/**
 * @param {number} n
 * @param {string[]} words
 * @returns {[number, number]}
 */
function solution(n, words) {
  const wordMemo = new Map();
  const playerTurnMemo = new Map();
  let latestWord = '';

  for (let i = 0; i < n; i++) {
    playerTurnMemo.set(i + 1, 0);
  }

  for (let i = 0; i < words.length; i++) {
    const currentPlayer = (i % n) + 1;
    const word = words[i];
    playerTurnMemo.set(currentPlayer, playerTurnMemo.get(currentPlayer) + 1);

    if (i === 0) {
      latestWord = word;
      wordMemo.set(word, 1);
      continue;
    }

    if (latestWord.at(-1) !== words[i][0])
      return [currentPlayer, playerTurnMemo.get(currentPlayer)];
    if (wordMemo.get(word))
      return [currentPlayer, playerTurnMemo.get(currentPlayer)];

    wordMemo.set(word, 1);
    latestWord = word;
  }

  return [0, 0];
}

export default solution;

const graph = {
  g: ['h', 'i'],
  h: ['g', 'j'],
  j: ['h', 'i', 'k', 'l'],
  i: ['g', 'j'],
  k: ['j'],
  l: ['j'],
};

/**
 * @param {Record<string, string[]>} graph
 * @param {string} startingNode
 * @returns {string[]}
 */
function dfs(graph, startingNode) {
  const visited = new Set();
  const stack = [startingNode];
  const result = [];
  while (stack.length) {
    const current = stack.pop();
    if (visited.has(current)) continue;
    visited.add(current);
    result.push(current);
    stack.push(...graph[current]);
  }
  return result;
}

/**
 * @param {Record<string, string[]>} graph
 * @param {string} startingNode
 * @returns {string[]}
 */
function bfs(graph, startingNode) {
  const visited = new Set();
  const queue = [startingNode];
  const result = [];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    result.push(current);
    queue.push(...graph[current]);
  }
  return result;
}

console.log(dfs(graph, 'g'));
console.log(bfs(graph, 'g'));

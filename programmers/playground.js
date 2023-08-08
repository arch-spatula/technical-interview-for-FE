/**
 * @param {string} s
 * @returns {0 | 1}
 */
function solution(s) {
  let sArr = s.split('');
  let stack = [];
  for (let i = sArr.length - 1; i >= 0; i--) {
    if (stack.at(-1) === sArr[i]) stack.pop();
    else stack.push(sArr[i]);
  }
  return stack.length === 0 ? 1 : 0;
}

// int solution(string s)
// {
//     stack<char> sStack;
//     for(auto chr:s)
//     {
//         if(sStack.size()>0 && sStack.top() == chr)
//         {
//             sStack.pop();
//         }
//         else
//         {
//             sStack.push(chr);
//         }
//     }
//     return answer;
// }

export default solution;

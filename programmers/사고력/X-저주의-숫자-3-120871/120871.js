function solution(n) {
  const arr = Array.from({ length: 200 }, (_, idx) => idx);

  return arr.filter((num) => {
    if (num % 3 === 0) return false;
    if (num.toString().includes("3")) return false;
    return true;
  })[n - 1];
}

export default solution;

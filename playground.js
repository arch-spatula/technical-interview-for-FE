const arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());

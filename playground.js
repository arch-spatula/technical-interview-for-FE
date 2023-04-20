class HashTable {
  constructor(...arr) {
    this.table = [...arr];
  }

  add(key, value, idx) {
    this.table[idx].push([key, value]);
  }
}

const hashTable = new HashTable(
  [["red", "#FF0000"]],
  [
    ["gree", "#00FF00"],
    ["springgreen", "#00FF7F"],
  ],
  [["blue", "#0000FF"]]
);

console.log(hashTable.table);

hashTable.add("pink", "#FFC0CB", 0);

console.log(hashTable.table);

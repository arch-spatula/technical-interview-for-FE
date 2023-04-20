export class HashTable<T> {
  private keyMap: [string, T][][];
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => []);
  }

  private hash(key: string) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: T) {
    if (!this.keyMap[this.hash(key)].find((tuple) => tuple[0] === key)) {
      this.keyMap[this.hash(key)].push([key, value]);
    } else {
      this.keyMap[this.hash(key)][
        this.keyMap[this.hash(key)].findIndex((tuple) => tuple[0] === key)
      ] = [key, value];
    }
  }

  get(key: string) {
    return this.keyMap[this.hash(key)].find((tuple) => tuple[0] === key)?.[1];
  }

  keys() {
    return this.keyMap
      .filter((arr) => arr.length > 0)
      .flat()
      .map((tuple) => tuple[0]);
  }

  values() {
    return this.keyMap
      .filter((arr) => arr.length > 0)
      .flat()
      .map((tuple) => tuple[1]);
  }
}

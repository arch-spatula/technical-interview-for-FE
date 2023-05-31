class Queue {
  #item;
  #head;
  #tail;
  constructor() {
    this.#item = new Map();
    this.#head = 0;
    this.#tail = 0;
  }

  enqueue(val) {
    this.#item.set(this.#tail, val);
    this.#tail += 1;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) return null;

    if (this.length > 0) {
      const result = this.#item.get(this.#head);
      this.#item.delete(this.#head);
      this.#head += 1;
      return result;
    }

    return result;
  }

  get length() {
    return this.#tail - this.#head;
  }
}

export default Queue;

class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(item) {
    this.array.push(item);
  }
  dequeue() {
    return this.array.shift();
  }
  get length() {
    return this.array.length;
  }
  get empty() {
    return this.array.length < 1;
  }

}

module.exports = Queue;
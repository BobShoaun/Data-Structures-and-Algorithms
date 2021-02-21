// enqueue back, dequeue front
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

// enqueue front, dequeue back
class Queue2 {
  constructor() {
    this.array = [];
  }
  get empty() {
    return this.array.length < 1;
  }
  enqueue(item) {
    this.array.unshift(item);
  }
  dequeue = () => this.array.pop();
}

module.exports = Queue;
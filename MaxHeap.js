class MaxHeap {
  constructor() {
    this.array = [Infinity]
  }

  // O(log n)
  insert(...numbers) {
    numbers.forEach(number => this.bubbleUp(this.array.push(number) - 1));
  }

  // O(1)
  findMax() {
    return this.array[1] || null;
  }

  // O(n log n)
  extractMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.maxHeapify(1);
    return max;
  }

  // O(log n)
  maxHeapify(index) {
    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);
    let max = index;

    // left bigger
    if (this.array[max] < this.array[left])
      max = left;

    if (this.array[max] < this.array[right])
      max = right;

    // valid heap
    if (max == index)
      return;
    
    this.swap(index, max);
    this.maxHeapify(max);
  }

  // O(log n)
  bubbleUp(index) {
    let parent = this.getParent(index)
    if (this.array[index] > this.array[parent]) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }
  }

  swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  getParent(index) {
    return Math.floor(index / 2);
  }

  getLeftChild(index) {
    return index * 2;
  }

  getRightChild(index) {
    return index * 2 + 1;
  }

  visualize() {
    for (let i = 1; i < this.array.length; i++) {
      
    }
  }
}

let h = new MaxHeap();
h.insert(20, 9, 18, 8, 6, 5, 12, 3, 2)
console.log(h.array);
h.insert(11);
console.log(h.array);


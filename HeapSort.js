const MaxHeap = require("./MaxHeap");

function heapSort(array) {
	let heap = new MaxHeap();
	heap.insert(...array);
	let sorted = [];
	while (!heap.empty) sorted.push(heap.extractMax());
	return sorted;
}

/* more efficient way to populate heap
   worst case: O(n) for population
   extracting worst case: O(n log n)
*/
function heapSort2(array) {
	let heap = new MaxHeap();
	heap.array = [Infinity, ...array];
	for (let i = Math.floor(array.length / 2); i >= 1; i--) heap.maxHeapify(i);
	let sorted = [];
	while (!heap.empty) sorted.push(heap.extractMax());
	return sorted;
}

console.log(heapSort2([2, 7, 26, 25, 19, 17, 1, 90, 3, 36]));

// console.log(heapSort([1, 3, -2, 4, 54, 90, 332, -23, 32, -5]));

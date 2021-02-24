const MaxHeap = require("./MaxHeap");

function heapSort(array) {
	let heap = new MaxHeap();
	heap.insert(...array);
	let sorted = [];
	while (!heap.empty) sorted.push(heap.extractMax());
	return sorted;
}

console.log(heapSort([1, 3, -2, 4, 54, 90, 332, -23, 32, -5]));

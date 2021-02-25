// O(n^2)
function selectionSort(array) {
	let sortedArray = [];

	while (array.length > 0) {
		let mIndex = minIndex(array);
		sortedArray.push(array[mIndex]);
		array.splice(mIndex, 1);
	}

	return sortedArray;
}

function minIndex(array) {
	let index = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[index] > array[i]) index = i;
	}
	return index;
}

test = [1, 5, 69, 4, 49, 8, -1, -5, 4234, 44, 100];
console.log(selectionSort(test));

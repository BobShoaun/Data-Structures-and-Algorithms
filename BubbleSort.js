
// O(n^2)
function bubbleSort(array) {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				// swap test[i] and test[i+]
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;

				sorted = false;
			}
		}
	}
	return array;
}

test = [1, 5, 69, 4, 49, 8, -1, -5, 4234, 44, 100];
console.log(bubbleSort(test));
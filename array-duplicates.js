var removeDuplicates = function (nums) {
	let count = 0;
	for (let i = 1; i < nums.length; ) {
		if (nums[i] == nums[i - 1]) {
			nums.splice(i, 1);
			// console.log(nums);
			count++;
		} else {
			i++;
		}
	}
	return count;
};

let arr = [1, 1, 2];

removeDuplicates(arr);

console.log(arr);

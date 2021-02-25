
// array keys must be in increasing order.
function binarySearch(sortedArray, key) {
  let midIndex = Math.floor(sortedArray.length / 2);
  let mid = sortedArray[midIndex];
  if (key == mid.key)
    return mid.value;
  if (key < mid.key)
    return binarySearch(sortedArray.slice(0, midIndex), key);
  return binarySearch(sortedArray.slice(midIndex + 1), key);
}

let pairs = [
  { key: -1, value: 'zero' },
  { key: 0, value: 'zero' },
  { key: 1, value: 'one' },
  { key: 2, value: 'two' },
  { key: 3, value: 'three' },
  { key: 4, value: 'four' },
  { key: 5, value: 'five' },
  { key: 6, value: 'six' },
  { key: 7, value: 'seven' },
  { key: 8, value: 'eight' },
  { key: 100, value: 'hundred' },
];

console.log(binarySearch(pairs, 100));
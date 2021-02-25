/* 
  worst case O(n^2)
  average case O(n log n)
  best case O(n log n)
*/
function quickSort(array) {
  if (array.length < 2)
    return array;
  let pivot = array[0] //pivot as first element of array
  let { bigger, smaller } = partition(array.slice(1), pivot);
  bigger = quickSort(bigger);
  smaller = quickSort(smaller);
  return [...smaller, pivot, ...bigger];
}

function partition(array, pivot) {
  let bigger = [];
  let smaller = [];
  for(let element of array) {
    if (element > pivot)
      bigger.push(element);
    else
      smaller.push(element);
  }
  return { bigger, smaller };
}

module.exports = quickSort;

console.log(quickSort([2, 5, 3, -22, 6, -4, -5, 100, 32, 2, 34, -2323, 6, -4, 89, 69]));
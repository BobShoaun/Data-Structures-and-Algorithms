const BinarySearchTree = require("./BinarySearchTree");
const AVLTree = require("./AVLTree");

/* 
limitation: no duplicates allowed
O(n log(n))
*/
function treeSort(...array) {
	let bst = new BinarySearchTree();
	bst.insertAll(array);
	return [...bst.inOrderTraversal()];
}

function treeSort2(...array) {
  let avl = new AVLTree();
  avl.insertAll(...array);
  return [...avl.inOrderTraversal()];
}

module.exports = treeSort;

console.log(treeSort(4, 6, 2, -1, 323, 435, -23, 23, 69, 1231232, 3, 1, -1231));

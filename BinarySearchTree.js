class BinarySearchTree {
	constructor() {
		this.key = null;
		this.left = null;
		this.right = null;
	}

	// O(log n)
	insert(key) {
		if (!this.key) {
			this.key = key;
			return;
		}
		if (key < this.key) {
			if (!this.left) this.left = new BinarySearchTree();
			this.left.insert(key);
			return;
		}
		if (key > this.key) {
			if (!this.right) this.right = new BinarySearchTree();
			this.right.insert(key);
			return;
		}
		throw new Error("No duplicate values allowed");
	}

	// O(log n)
	search(key) {
		if (!this.key) return false;

		if (key < this.key && this.left) return this.left.search(key);

		if (key > this.key && this.right) return this.right.search(key);

		return this.key == key;
	}

	inOrderSuccessor() {
		let curr = this?.right;
		while (curr.left) curr = curr.left;
		return curr.key;
	}

	delete(key) {
		if (!this.key) return false;

		if (key < this.key && this.left) return this.left.delete(key);
		if (key > this.key && this.right) return this.right.delete(key);

		if (key == this.key) {
			if (!this.left) {
				this.key = this.right?.key;
				this.right = null;
				return true;
			}
			if (!this.right) {
				this.key = this.left?.key;
				this.left = null;
				return true;
			}

			// tree has two subtrees
			// replace root with successor (smallest node in right subtree)
			let temp = this.inOrderSuccessor();
			this.key = temp;
			return this.right.delete(temp);
		}
		return false;
	}

	*inOrderTraversal() {
		if (this.left) yield* this.left.inOrderTraversal();
		if (this.key) yield this.key;
		if (this.right) yield* this.right.inOrderTraversal();
	}

	*preOrderTraversal() {
		if (this.key) yield this.key;
    if (this.left) yield* this.left.preOrderTraversal();
		if (this.right) yield* this.right.preOrderTraversal();
	}

	*postOrderTraversal() {
    if (this.left) yield* this.left.postOrderTraversal();
		if (this.right) yield* this.right.postOrderTraversal();
		if (this.key) yield this.key;
	}

	insertAll(keys) {
		for (let key of keys) this.insert(key);
	}
}

module.exports = BinarySearchTree;
// let bst2 = new BinarySearchTree(25);
// bst2.insert(15);
// bst2.insert(50);
// bst2.insert(10);
// bst2.insert(22);
// bst2.insert(35);
// bst2.insert(70);
// bst2.insert(4);
// bst2.insert(12);
// bst2.insert(18);
// bst2.insert(24);
// bst2.insert(31);
// bst2.insert(44);
// bst2.insert(66);
// bst2.insert(90);

// bst2.delete(25);
// bst2.delete(31);
// bst2.inOrderTraversal();

let bst2 = new BinarySearchTree();
bst2.insertAll([11, 3, 13, 2, 6, 12, 16, 5, 9, 14, 18, 4, 7, 15, 17, 19, 8]);

console.log(Array.from(bst2.inOrderTraversal()))

// for (let k of bst2.inOrderTraversal()) console.log(k);

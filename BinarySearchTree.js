class BinarySearchTree {
	constructor(root) {
		this.root = root;
		this.left = null;
		this.right = null;
	}

	// O(log n)
	insert(value) {
		if (!this.root) {
			this.root = value;
			return;
		}
		if (value < this.root) {
			if (!this.left) this.left = new BinarySearchTree();
			this.left.insert(value);
			return;
		}
		if (value > this.root) {
			if (!this.right) this.right = new BinarySearchTree();
			this.right.insert(value);
			return;
		}
		throw new Error("No duplicate values allowed");
	}

	// O(log n)
	search(value) {
		if (!this.root) return false;

		if (value < this.root && this.left) return this.left.search(value);

		if (value > this.root && this.right) return this.right.search(value);

		return this.root == value;
	}

	inOrderSuccessor() {
		let curr = this?.right;
		while (curr.left) curr = curr.left;
		return curr.root;
	}

	delete(value) {
		if (!this.root) return false;

		if (value < this.root && this.left) return this.left.delete(value);
		if (value > this.root && this.right) return this.right.delete(value);

		if (value == this.root) {
			if (!this.left) {
				this.root = this.right?.root;
				this.right = null;
				return true;
			}
			if (!this.right) {
				this.root = this.left?.root;
				this.left = null;
				return true;
			}

			// tree has two subtrees
			// replace root with successor (smallest node in right subtree)
			let temp = this.inOrderSuccessor();
			this.root = temp;
			return this.right.delete(temp);
		}
		return false;
	}

	inOrderTraversal() {
		this.left?.inOrderTraversal();
		if (this.root) console.log(this.root);
		this.right?.inOrderTraversal();
	}

	preOrderTraversal() {
		console.log(this.root);
		this.left?.preOrderTraversal();
		this.right?.preOrderTraversal();
	}

	postOrderTraversal() {
		this.left?.postOrderTraversal();
		this.right?.postOrderTraversal();
		if (this.root) console.log(this.root);
	}
}

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

function insertAll(bst, values) {
	for (let i = 0; i < values.length; i++) bst.insert(values[i]);
}

let bst2 = new BinarySearchTree(11);
insertAll(bst2, [3, 13, 2, 6, 12, 16, 5, 9, 14, 18, 4, 7, 15, 17, 19, 8]);

bst2.preOrderTraversal();

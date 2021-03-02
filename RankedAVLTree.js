const Queue = require("./Queue");

/*
an augmented avl tree with an additional size property, 
allowing it too keep track of each element's rank and do Rank and Select operations.
*/
class RankedAVLTree {
	constructor() {
		this.key = null;
		this.left = null;
		this.right = null;
		this.height = -1;
		this.size = 0;
	}

	get leftHeight() {
		return this.left?.height ?? -1;
	}

	get rightHeight() {
		return this.right?.height ?? -1;
	}

	get balance() {
		return this.rightHeight - this.leftHeight;
	}

	updateHeight() {
		this.height = 1 + Math.max(this.leftHeight, this.rightHeight);
	}

	get leftSize() {
		return this.left?.size ?? 0;
	}

	get rightSize() {
		return this.right?.size ?? 0;
	}

	updateSize() {
		this.size = 1 + this.rightSize + this.leftSize;
	}

	rightRotate() {
		let x = this.left;
		let transfer = x.right;

		// rotate
		x.right = this;
		this.left = transfer;

		// update heights
		this.updateHeight();
		x.updateHeight();

		// update sizes
		this.updateSize();
		x.updateSize();

		// new root
		return x;
	}

	leftRotate() {
		let x = this.right;
		let transfer = x.left;

		// rotate
		x.left = this;
		this.right = transfer;

		// update heights
		this.updateHeight();
		x.updateHeight();

		// update sizes
		this.updateSize();
		x.updateSize();

		// new root
		return x;
	}

	/* insert key into tree, return new tree. */
	insert(key) {
		if (!this.key) {
			this.key = key;
			this.height = 0;
			this.size = 1;
			return this;
		}

		if (key < this.key) {
			if (!this.left) this.left = new RankedAVLTree();
			this.left = this.left.insert(key);
		} else if (key > this.key) {
			if (!this.right) this.right = new RankedAVLTree();
			this.right = this.right.insert(key);
		} else throw new Error("No duplicate values allowed");

		this.size++;

		this.updateHeight();

		// left left
		if (this.balance < -1 && key < this.left.key) {
			return this.rightRotate();
		}

		// right right
		if (this.balance > 1 && key > this.right.key) {
			return this.leftRotate();
		}

		// left right
		if (this.balance < -1 && key > this.left.key) {
			this.left = this.left.leftRotate();
			return this.rightRotate();
		}

		// right left
		if (this.balance > 1 && key < this.right.key) {
			this.right = this.right.rightRotate();
			return this.leftRotate();
		}

		return this;
	}
  
	delete(key) {}

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

	*bfs() {
		let queue = new Queue();
		queue.enqueue(this);

		while (!queue.empty) {
			let curr = queue.dequeue();
			yield curr.key;

			if (curr.left) queue.enqueue(curr.left);
			if (curr.right) queue.enqueue(curr.right);
		}
	}

	insertAll(...keys) {
		let root = this;
		for (let key of keys) root = root.insert(key);
		return root;
	}
}

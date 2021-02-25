/*
An AVL tree is a binary search tree with the property of a balance factor
this one is following geeks for geeks
*/

class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

class AVLTree {
	constructor() {}

	height(node) {
		return node ? node.height : -1;
	}

	updateHeight(node) {
		node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	getBalance(node) {
		if (!node) return 0;
		return this.height(node.right) - this.height(node.left);
	}

	rightRotate(node) {
		let x = node.left;
		let transfer = x.right;

		// rotate
		x.right = node;
		node.left = transfer;

		// update heights
		this.updateHeight(node);
		this.updateHeight(x);

		// new root
		return x;
	}

	leftRotate(node) {
		let x = node.right;
		let transfer = x.left;

		// rotate
		x.left = node;
		node.right = transfer;

		// update heights
		this.updateHeight(node);
		this.updateHeight(x);

		// new root
		return x;
	}

	/* insert key into subtree rooted at node and return the new root of subtree. */
	insert(node, key) {
		if (!node) return new Node(key);

		if (key < node.key) node.left = this.insert(node.left, key);
		else if (key > node.key) node.right = this.insert(node.right, key);
		else throw new Error("No duplicate values allowed");

		this.updateHeight(node);

		let balance = this.getBalance(node);

		// left left
		if (balance < -1 && key < node.left.key) return this.rightRotate(node);

		// right right
		if (balance > 1 && key > node.right.key) return this.leftRotate(node);

		// left right
		if (balance < -1 && key > node.left.key) {
			node.left = this.leftRotate(node.left);
			return this.rightRotate(node);
		}

		// right left
		if (balance > 1 && key < node.right.key) {
			node.right = this.rightRotate(node.right);
			return this.leftRotate(node);
		}

		return node;
	}
	delete(key) {}
	preOrderTraversal(root) {
		if (!root) return;
		console.log(root.key, this.getBalance(root));
		this.preOrderTraversal(root.left);
		this.preOrderTraversal(root.right);
	}
	insertAll(root, keys) {
		for (let key of keys) root = this.insert(root, key);
		return root;
	}
}

let tree = new AVLTree();
// tree.root = tree.insert(tree.root, 5);
// tree.root = tree.insert(tree.root, 6);

tree.root = tree.insertAll(tree.root, [7, 5, 6, 8, 3, 4]);

tree.preOrderTraversal(tree.root);

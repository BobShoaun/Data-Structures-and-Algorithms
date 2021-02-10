/*
An almost (or nearly) complete binary tree is a binary tree where all levels are full except possibly the last, 
and all nodes in the bottom level are as far left as possible.
*/

class Node {
	constructor(value) {
		this.parent = null;
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function insert(parent, node) {
	node.parent = parent;
	if (!parent.left) parent.left = node;
	else if (!parent.right) parent.right = node;
	else console.error("No space to insert!");
}

function preOrderTraversal(node) {
	process.stdout.write(`${node.value} `);
	if (node.left) preOrderTraversal(node.left);
	if (node.right) preOrderTraversal(node.right);
}

function findInsertParentOld(lastNode) {
	if (!lastNode.parent) {
		console.log("ROOT: insert to left of ", lastNode.value);
		return lastNode;
	}

	let prev = lastNode;
	let curr = lastNode.parent;

	while (curr.right == prev) {
		if (!curr.parent) {
			// found root, keep going into left subtree.
			while (curr.left) curr = curr.left;
			console.log("NEW ROW: insert to left of ", curr.value);
			return curr;
		}
		// go parent, cuz that means left child is occupied.
		prev = curr;
		curr = curr.parent;
	}
	// came from left, found common ancestor
	if (!curr.right) {
		console.log("SHALLOW: insert to right of ", curr.value);
		return curr;
	}

	curr = curr.right;

	// keep going left
	while (curr.left) curr = curr.left;
	console.log("DEEP: insert to left of ", curr.value);
	return curr;
}

function findInsertParent(lastNode) {
	if (!lastNode.parent) {
		console.log("ROOT: insert to left of ", lastNode.value);
		return lastNode;
	} else if (!lastNode.parent.right) {
		console.log("SHALLOW: insert to right of ", lastNode.parent.value);
		return lastNode.parent;
	} else {
		let prev = lastNode;
		let curr = lastNode.parent;

		while (curr.parent && curr.right == prev) {
			prev = curr;
			curr = curr.parent;
		}

		if (curr.left == prev) curr = curr.right;

		while (curr.left) curr = curr.left;

		console.log("DEEP: insert to left of ", curr.value);
		return curr;
	}
}

let parent, latest;

root = new Node(0);
insert(root, new Node(1));
insert(root, new Node(2));
insert(root.left, new Node(3));
insert(root.left, new Node(4));
insert(root.right, new Node(5));
insert(root.right, (latest = new Node(6)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(7)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(8)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(9)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(10)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(11)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(12)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(13)));

parent = findInsertParent(latest);
insert(parent, (latest = new Node(14)));

parent = findInsertParent(latest);

preOrderTraversal(root);

const { Queue } = require("../Queue");

class Node {
	constructor(data) {
		this.l_child = this.r_child = undefined;
		this.value = data;
	}
}

class BinaryTree {
	constructor() {
		this.root = undefined;
		this.queue = new Queue();
	}

	insert(left, right) {
		const node = new Node(left);
		if (!this.root) {
			this.root = node;
			this.queue.enqueue(this.root);
		} else {
			if (this.queue.isEmpty) return console.log("Tree overflow");
			const parent = this.queue.dequeue();
			if (left === 0 && right === 0) return;
			if (left) {
				parent.value.l_child = new Node(left);
				this.queue.enqueue(parent.value.l_child);
			}
			if (right) {
				parent.value.r_child = new Node(right);
				this.queue.enqueue(parent.value.r_child);
			}
		}
	}

	preorder(node) {
		if (node) {
			console.log(node.value);
			this.preorder(node.l_child);
			this.preorder(node.r_child);
		}
	}
	inorder(node) {
		if (node) {
			this.inorder(node.l_child);
			console.log(node.value);
			this.inorder(node.r_child);
		}
	}

	postorder(node) {
		if (node) {
			this.postorder(node.l_child);
			this.postorder(node.r_child);
			console.log(node.value);
		}
	}
}

// const bt = new BinaryTree();
// bt.insert(2);
// bt.insert(3, 4);
// bt.insert(5, 6);
// console.log("pre order traversal : ");
// bt.preorder(bt.root);
// console.log("in order traversal : ");
// bt.inorder(bt.root);
// console.log("post order traversal : ");
// bt.postorder(bt.root);

module.exports = {
	BinaryTree,
	Node,
};

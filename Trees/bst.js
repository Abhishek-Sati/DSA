const { Node } = require("./binary");

class BinarySearchTree {
	constructor() {
		this.root = undefined;
	}

	insert(data) {
		const node = new Node(data);
		if (!this.root) this.root = node;
		else {
			let temp = this.root;
			if (data < temp.value) {
				if (!temp.l_child) temp.l_child = node;
				else {
					temp = temp.l_child;
					while (temp) {}
				}
			}
		}
	}
}

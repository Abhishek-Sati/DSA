class Node {
	constructor(data) {
		this.value = data;
		this.next = undefined;
	}
}

class Stack {
	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	insert(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
		} else {
			let temp = node;
			temp.next = this.head;
			this.head = temp;
		}
		this.length++;
	}

	delete() {
		if (!this.head) console.log("Stack is empty");
		else this.head = this.head.next;
		this.length--;
	}

	display() {
		if (!this.head) console.log("Stack is empty");
		else {
			console.log("Stack elements are : ");
			let temp = this.head;
			while (temp) {
				console.log(temp.value);
				temp = temp.next;
			}
		}
	}

	reverse() {
		if (!this.head) console.log("Stack is empty");
		else {
			let temp1 = undefined;
			let temp2 = this.head.next;
			while (temp2) {
				this.head.next = temp1;
				temp1 = this.head;
				this.head = temp2;
				temp2 = temp2.next;
			}
			this.head.next = temp1;
		}
	}
}

const stack = new Stack();
stack.insert(21);
stack.insert(22);
stack.insert(23);
stack.display();
stack.delete();
stack.display();
stack.reverse();
stack.display();

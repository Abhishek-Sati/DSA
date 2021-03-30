class Node {
	constructor(data) {
		this.value = data;
		this.next = undefined;
	}
}

class LinkedList {
	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	insert(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
		} else {
			let temp = this.head;
			while (temp.next) {
				temp = temp.next;
			}
			temp.next = node;
		}
		this.length++;
	}

	delete() {
		if (!this.head) console.log("Linked List is empty");
		else this.head = this.head.next;
		this.length--;
	}

	display() {
		if (!this.head) console.log("Linked List is empty");
		else {
			console.log("Linked List elements are : ");
			let temp = this.head;
			while (temp) {
				console.log(temp.value);
				temp = temp.next;
			}
		}
	}

	reverse() {
		if (!this.head) console.log("Linked List is empty");
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

const ls = new LinkedList();
ls.insert(21);
ls.insert(22);
ls.insert(23);
ls.display();
ls.delete();
ls.delete();
ls.display();
ls.reverse();
ls.display();

class Node {
	constructor(data) {
		this.value = data;
		this.next = undefined;
	}
}

class Queue {
	constructor() {
		this.rear = this.front = undefined;
		this.isEmpty = !this.rear;
	}

	enqueue(data) {
		const node = new Node(data);
		if (this.isEmpty) {
			this.rear = this.front = node;
			this.isEmpty = false;
		} else {
			this.rear.next = node;
			this.rear = this.rear.next;
		}
	}

	dequeue() {
		const temp = this.front;
		if (this.isEmpty) return temp;
		else if (!this.front.next) {
			this.front = this.rear = undefined;
			this.isEmpty = true;
		} else this.front = this.front.next;
		return temp;
	}

	display() {
		if (this.isEmpty) console.log("Queue is Empty !!");
		else {
			let temp = this.front;
			while (temp) {
				console.log(temp.value);
				temp = temp.next;
			}
		}
	}
}

// const q = new Queue();
// q.enqueue(2);
// q.enqueue(4);
// q.enqueue(5);
// q.enqueue(6);
// q.enqueue(7);
// q.enqueue(9);
// q.display();
// q.dequeue();
// q.dequeue();
// q.display();

module.exports = { Queue };

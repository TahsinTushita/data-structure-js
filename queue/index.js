class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

let quickQueue = new Queue();

quickQueue.enqueue("value1");
quickQueue.enqueue("value2");
quickQueue.enqueue("value3");
console.log(quickQueue);

console.log(quickQueue.first);
console.log(quickQueue.last);
console.log(quickQueue.size);

quickQueue.enqueue("value4");
console.log(quickQueue.dequeue());

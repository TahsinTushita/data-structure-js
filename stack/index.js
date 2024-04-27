class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.last;
      this.last = newNode;
      this.last.next = temp;
    }

    return this.size++;
  }

  pop() {
    if (!this.last) return null;
    const temp = this.last;

    if (this.last === this.first) {
      this.first = null;
    }

    this.last = temp.next;
    this.size--;
    return temp.value;
  }
}

let stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first);
console.log(stck.last);
console.log(stck.size);

stck.push("value4");
console.log(stck.pop());
console.log(stck.pop());
console.log(stck.pop());
console.log(stck.pop());
// stck.push("value5");
console.log(stck);
// console.log(stck);

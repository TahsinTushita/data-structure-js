// We create a class for each node within the list
// class Node {
// Each node has two properties, its value and a pointer that indicates the node that follows
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// We create a class for the list
// class SinglyLinkedList {
// The list has three properties, the head, the tail and the list size
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// The push method takes a value as parameter and assigns it as the tail of the list
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
// The pop method removes the tail of the list
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
// The shift method removes the head of the list
//   shift() {
//     if (!this.head) return undefined;
//     const currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }

// The unshift method takes a value as parameter and assigns it as the head of the list
//   unshift(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// The get method takes an index number as parameter and returns the value of the node at that index
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let counter = 0;
//     let current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
// The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }

// The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(val);
//     if (index === 0) return !!this.unshift(val);

//     const newNode = new Node(val);
//     const prev = this.get(index - 1);
//     const temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
// The remove method takes an index number as parameter and removes the node at the given index in the list
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     const previousNode = this.get(index - 1);
//     const removed = previousNode.next;
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }

// The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let prev = null;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }

// let list = new SinglyLinkedList();
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.pop();
// console.log(list.reverse());

// console.log(list);

// console.log(list.get(2));
// list.set(2, 23);
// list.insert(2, 23);
// list.remove(2);
// console.log(list);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return null;
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }

  get(index) {
    if (this.length === 0) return null;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let count = 0;
    let node = this.head;
    while (count !== index) {
      node = node.next;
      count++;
    }

    return node;
  }

  set(index, value) {
    if (this.length === 0) return null;
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      this.head.value = value;
      return this;
    }
    if (index === this.length - 1) {
      this.tail.value = value;
      return this;
    }

    let node = this.head;
    let count = 0;
    while (count !== index) {
      node = node.next;
      count++;
    }

    node.value = value;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    let count = 0;
    let node = this.head;
    let prevNode = this.head;
    while (count !== index) {
      prevNode = node;
      node = node.next;
      count++;
    }

    prevNode.next = newNode;
    newNode.next = node;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      let prevHead = this.head;
      this.head = this.head.next;
      this.length--;
      return prevHead;
    }

    let count = 0;
    let node = this.head;
    let prevNode = this.head;
    while (count !== index) {
      prevNode = node;
      node = node.next;
      count++;
    }

    prevNode.next = node.next;

    if (index === this.length - 1) {
      this.tail = prevNode;
    }

    this.length--;
    return node;
  }

  reverse() {
    if (this.length === 0) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// list.pop();
// console.log(list.reverse());

// console.log(list);

// console.log(list.get(2));
// console.log(list.set(3, 23));
// list.insert(2, 23);
// list.remove(2);
// console.log(list.unshift(8));
// list.shift();
// console.log(list.insert(4, 12));
// console.log(list.remove(3));
// console.log(list);
console.log(list.reverse());

// We create a class for each node within the list
// class Node {
// Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// We create a class for the list
// class DoublyLinkedList {
// The list has three properties, the head, the tail and the list size
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// The push method takes a value as parameter and assigns it as the tail of the list
//   push(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

// The pop method removes the tail of the list
//   pop() {
//     if (!this.head) return undefined;
//     const poppedNode = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = poppedNode.prev;
//       this.tail.next = null;
//       poppedNode.prev = null;
//     }
//     this.length--;
//     return poppedNode;
//   }
// The shift method removes the head of the list
//   shift() {
//     if (this.length === 0) return undefined;
//     const oldHead = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = oldHead.next;
//       this.head.prev = null;
//       oldHead.next = null;
//     }
//     this.length--;
//     return oldHead;
//   }

// The unshift method takes a value as parameter and assigns it as the head of the list
//   unshift(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
// The get method takes an index number as parameter and returns the value of the node at that index
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let count, current;
//     if (index <= this.length / 2) {
//       count = 0;
//       current = this.head;
//       while (count !== index) {
//         current = current.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       current = this.tail;
//       while (count !== index) {
//         current = current.prev;
//         count--;
//       }
//     }
//     return current;
//   }

// The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
//   set(index, val) {
//     var foundNode = this.get(index);
//     if (foundNode != null) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }
// The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unshift(val);
//     if (index === this.length) return !!this.push(val);

//     var newNode = new Node(val);
//     var beforeNode = this.get(index - 1);
//     var afterNode = beforeNode.next;

//     (beforeNode.next = newNode), (newNode.prev = beforeNode);
//     (newNode.next = afterNode), (afterNode.prev = newNode);
//     this.length++;
//     return true;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return null;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  get(index) {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let count;
    let node;

    if (index <= this.length / 2) {
      count = 0;
      node = this.head;

      while (count !== index) {
        node = node.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;

      while (count !== index) {
        node = node.prev;
        count--;
      }
    }

    return node;
  }

  set(index, value) {
    if (index < 0 || index >= this.length - 1 || this.length === 0) return null;
    if (index === 0) this.head.value = value;
    if (index === this.length - 1) this.tail.value = value;

    let count;
    let node;

    if (index <= this.length / 2) {
      count = 0;
      node = this.head;

      while (count !== index) {
        node = node.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;

      while (count !== index) {
        node = node.prev;
        count--;
      }
    }

    node.value = value;

    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length || this.length === 0) return null;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let count;
      let node;

      if (index <= this.length / 2) {
        count = 0;
        node = this.head;

        while (count !== index) {
          node = node.next;
          count++;
        }
      } else {
        count = this.length - 1;
        node = this.tail;

        while (count !== index) {
          node = node.prev;
          count--;
        }
      }

      node.prev.next = newNode;
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev = newNode;
    }

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length || this.length === 0) return null;

    let poppedNode;

    if (this.length === 1) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      poppedNode = this.head;
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    } else if (index === this.length - 1) {
      poppedNode = this.tail;
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    } else {
      let count;
      let node;

      if (index <= this.length / 2) {
        count = 0;
        node = this.head;

        while (count !== index) {
          node = node.next;
          count++;
        }
      } else {
        count = this.length - 1;
        node = this.tail;

        while (count !== index) {
          node = node.prev;
          count--;
        }
      }

      poppedNode = node;
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }

    this.length--;
    return poppedNode;
  }

  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;

    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    let nextNode;
    let prev = null;
    let node = oldHead;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.prev = node.next;
      node.next = prev;
      prev = node;
      node = nextNode;
    }

    return this;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
// list.pop();
// list.unshift(7);
// list.shift();
// console.log(list.get(2));
// list.set(2, 7);
// list.insert(6, 10);
// console.log(list.remove(5));

console.log(list.reverse());

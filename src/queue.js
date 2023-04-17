const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  }

  removeKFromList(l, k) {
    let current = l;
    let previous = null;
    while (current) {
      if (current.value === k) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        if (!current.next) {
          this.tail = previous;
        }
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
}

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

module.exports = {
  Queue
};

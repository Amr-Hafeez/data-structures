/*
* First in first out (FIFO)
* Enqueue: adding data to the queue
* Dequeue: removing data from the queue
* Infrastructure: Array or Linked List
* Operations: enqueue, dequeue, peek, size, and isEmpty
*  */

//TODO: Implement the queue on Array-Base.

import { LinkedList, LinkedListNode } from "../2-LinkedList/linkedList";

class Queue extends LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  enqueue(_data: number) {
    this.insertLast(_data);
  }

  dequeue() {
    if (this.head === null) return null;
    const data = this.head.data;
    this.head = this.head?.next;
    return data;
  }

  size(): number {
    let size: number = 0;
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      size++;
    }
    return size;
  }

  peek() {
    if (this.head === null) return null;
    return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }
}

const queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(44);
console.log(queue.isEmpty())
queue.enqueue(13);

// queue.printList();
console.log(`Size: ${queue.size()}`);
queue.printList();
queue.dequeue();
queue.dequeue();
queue.enqueue(66);
queue.enqueue(16);
console.log(queue.peek())
queue.printList();
// console.log(queue)

/*
* Infrastructure: Non-consecutive memory stores
*
*/

// @ts-ignore
export class LinkedListNode {
    data: number;
    next: null | LinkedListNode;
    prev: null | LinkedListNode;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// @ts-ignore
export class LinkedListIterator {
    currentNode: LinkedListNode | null | undefined;

    constructor(node: LinkedListNode) {
        this.currentNode = node;
    }

    data() {
        return this.currentNode?.data;
    }

    next() {

        this.currentNode = this.currentNode?.next;
        return this;
    }

    current(): LinkedListNode {
        return <LinkedListNode>this.currentNode;
    }
}

// @ts-ignore
export class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null ;
    count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    begin(): LinkedListIterator {
        // @ts-ignore
        return new LinkedListIterator(this.head);
    }

    find(data: number) {
        for (let itr:LinkedListIterator = this.begin(); itr.current() !== null; itr.next()) {
            if (data == itr.data()) {
                return itr.current();
            }
        }
    }

    printList(): void {
        for (let itr:LinkedListIterator = this.begin(); itr.current() !== null; itr.next()) {
            console.log(itr.data(), "->");
        }
    }

    insertLast(data: number): void {
        const newNode = new LinkedListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.count++;
    }

    insertAfter(node: LinkedListNode, data: number): void {
        const newNode: LinkedListNode = new LinkedListNode(data);
        newNode.next = node.next;
        newNode.prev = node;
        node.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        } else {
            newNode.next.prev = newNode;
        }

        this.count++;
    }

    insertBefore(node: LinkedListNode, data: number): void {
        const newNode: LinkedListNode = new LinkedListNode(data);
        newNode.next = node;
        if (node === this.head) {
            this.head = newNode;
        } else {
            // @ts-ignore
            node.prev.next = newNode;
        }
        node.prev = newNode;

        this.count++;
    }

    deleteNode(node: LinkedListNode): void {
        //  || (node.prev === null && node.next === null)
        if (this.head === this.tail) { // IF There is one node in the List.
            this.head = null;
            this.tail = null;
        } else if (node.prev === null) { // If the node will be deleted is head.
            this.head = node.next;
            // @ts-ignore
            node.next.prev = null;
        } else if (node.next === null ) { // The node is tail.
            this.tail = node.prev;
            node.prev.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        this.count--;
    }

    insertFirst(data: number) {
        // Check if the node can be added.
        const newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.count++;
    }

    deleteHead() {
        if (this.head === null) return;
        this.head = this.head.next;
        this.count--;
    }
}


const linkedList: LinkedList = new LinkedList();

linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
// linkedList.insertLast(4);

// @ts-ignore
linkedList.insertAfter(linkedList.find(2), 98);

// @ts-ignore
linkedList.deleteNode(linkedList.find(2));


// @ts-ignore
linkedList.insertBefore(linkedList.find(98), 76);

linkedList.printList();
console.log(linkedList.count);

// The Assignment
// getLength from property not from a function
// Store any data in the list
// HardCopy a list.
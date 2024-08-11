/*
* Infrastructure: Non-consecutive memory stores
*
*/

export class LinkedListNode {
    data: number;
    next: null | LinkedListNode;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListIterator {
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

export class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null ;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    begin(): LinkedListIterator {
        // @ts-ignore
        return new LinkedListIterator(this.head);
    }

    printList(): void {
        for (let itr:LinkedListIterator = this.begin(); itr.current() !== null; itr.next()) {
            console.log(itr.data(), "->");
        }
    }

    find(data: number) {
        for (let itr:LinkedListIterator = this.begin(); itr.current() !== null; itr.next()) {
            if (data == itr.data()) {
                return itr.current();
            }
        }
    }

    findParent(node: LinkedListNode) {
        for (let itr: LinkedListIterator = this.begin(); itr.current() !== null; itr.next()) {
            if (itr.current().next === node) {
                return itr.current();
            }
        }
    }

    insertLast(data: number): void {
        const newNode: LinkedListNode = new LinkedListNode(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // @ts-ignore
            this.tail?.next = newNode;
            this.tail = newNode;
        }
    }

    insertAfter(node: LinkedListNode, data: number): void {
        const newNode: LinkedListNode = new LinkedListNode(data);
        // Think about it!
        // newNode.next = node.next; // This Line From the Lec.
        if (node.next === null) {
            this.tail = newNode;
        } else {
            newNode.next = node.next;
        }
        node.next = newNode;
    }

    insertBefore(node: LinkedListNode, data: number): void {
        const newNode: LinkedListNode = new LinkedListNode(data);
        newNode.next = node;

        const parent = this.findParent(node);
        if (parent === null) {
            this.head = newNode;
        } else {
            // @ts-ignore
            parent.next = newNode;
        }
    }

    deleteNode(node: LinkedListNode): void {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head === node) {
            this.head = node.next;
        } else {
            const parent = this.findParent(node);
            if (this.tail === node) {
                // @ts-ignore
                this.tail = parent;
            } else {
                // @ts-ignore
                parent.next = node.next;
            }
        }
    }
}

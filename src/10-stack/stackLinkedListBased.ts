import {LinkedList} from "../2-LinkedList/doublyList";

class StackLinkedListBased {
    #dataList;

    constructor() { // Add unique to the constructor
        this.#dataList = new LinkedList();
    }

    push(data: number) {
        this.#dataList.insertFirst(data);
    }

    pop() {
        const headData = this.#dataList.head?.data;
        this.#dataList.deleteHead();
        return headData;
    }

    peek() {
        return this.#dataList.head?.data;
    }

    isEmpty() {
        return this.#dataList.count <= 0;
    }

    print() {
        this.#dataList.printList();
    }
}
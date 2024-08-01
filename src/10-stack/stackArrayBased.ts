class StackArrayListBased {
    readonly #dataList: any[];
    #top_index: number;
    constructor() { // Add unique to the constructor
        this.#dataList = [];
        this.#top_index = -1;
    }

    push(data: number | string) {
        this.#dataList.push(data);
        this.#top_index++;
    }

    pop(): number | undefined {
        if (this.#top_index === -1) return;
        const headData = this.#dataList.splice(this.#top_index, 1)[0];
        this.#top_index--; // Why is that
        return headData;
    }

    peek() {
        return this.#dataList[this.#top_index];
    }

    isEmpty(): boolean {
        return this.#dataList.length <= 0;
    }

    print() {
        // let printData = "";
        let array = this.#dataList;
        array = array.reverse().map((item, index) => (`${index} -> ${item}`));
        console.log(array.join("\n"));
    }

    size(): number {
        return this.#dataList.length;
    }
}

const stack = new StackArrayListBased();
stack.push(23);
stack.pop();
stack.push(85);
stack.push("Test2w");
console.log(stack.peek())
console.log(stack.size())

stack.print();

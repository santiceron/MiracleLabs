
class StackNode<T> {
    private data: T;
    public previous: StackNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.previous = null;
    }

    getData() {
        return this.data;
    }
}

class Stack<T> {
    private top: StackNode<T> | null;
    private size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data: T) {
        let node = new StackNode(data);

        if (!this.top) {
            this.top = node;
        } else {
            node.previous = this.top;
            this.top = node;
        }

        this.size++;
    }

    pop(): T | null {

        if (!this.top) {
            return null;
        } else {
            let poppedElement = this.top;
            this.top = this.top.previous;
            poppedElement.previous = null;
            this.size--;

            return poppedElement.getData();
        }
    }

    stackSize() {
        return this.size;
    }

    isEmpty(): boolean {
        return !this.top;
    }

    printStack() {

        let current = this.top;

        if (!current) {
            console.log("Empty stack");
        } else {
            while (current) {
                console.log(current.getData());
                current = current.previous;
            }
        }
    }

}

function toBinary(decimal: number): string {

    let binary = "";

    if (decimal === 0) {
        return '0';
    }

    const binaryStack = new Stack();

    while (decimal > 0) {
        const remainder = decimal % 2;
        binaryStack.push(remainder);
        decimal = Math.floor(decimal / 2);
    }

    while (binaryStack.isEmpty() === false) {
        binary += binaryStack.pop()!.toString();
    }

    return binary;
}

function toBase(decimal: number, base: number): string {        //reusing function toBinary
    let result = "";

    if(base < 2 || base > 36){
        throw new Error("Base must be between 2 and 36");
    }

    if (decimal === 0) {
        return '0';
    }

    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    const baseStack = new Stack();

    while (decimal > 0) {
        const remainder = decimal % base;
        baseStack.push(digits[remainder]);
        decimal = Math.floor(decimal / base);
    }

    while (!baseStack.isEmpty()) {
        result += baseStack.pop()!;
    }

    return result;
}
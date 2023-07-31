
export class QueueNode<T> {
    private data: T;
    public next: QueueNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }
}

export class Queue<T> {
    public head: QueueNode<T> | null;
    public tail: QueueNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data: T) {
        const node = new QueueNode(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue(): T | null {
        if (!this.head) {                               //if the queue is empty
            return null;
        } else {
            const dequeuedElement = this.head;
            const value = dequeuedElement.getData();

            this.head = dequeuedElement.next;
            dequeuedElement.next = null;

            this.size--;
            return value;
        }
    }

    getSize(){
        return this.size;
    }

    printQueue() {

        let current = this.head;

        if(!current){
            console.log("Empty queue");
        } else {
            while(current){
                console.log(current.getData());
                current = current.next;
            }
        }
    }
}
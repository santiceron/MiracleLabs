class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data: number) {
        let node = new ListNode(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    remove(value: number) {
        let current = this.head;
        let previous: ListNode | undefined;

        if (!current) {
            return;
        }

        while (current && current.data !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            return;
        }

        if (!previous) {
            this.head = current.next;
        } else {
            previous.next = current.next;
        }

        this.size--;
    }

    listSize() {
        return this.size;
    }

    find(value: number): ListNode | null {
        let current = this.head;

        if (!current) {
            return null;
        }

        while (current) {
            if (current.data === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
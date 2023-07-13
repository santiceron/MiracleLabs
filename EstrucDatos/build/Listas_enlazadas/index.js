"use strict";
class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        let node = new ListNode(data);
        let current;
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove(value) {
        let current = this.head;
        let previous;
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
        }
        else {
            previous.next = current.next;
        }
        this.size--;
    }
    listSize() {
        return this.size;
    }
    find(value) {
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
const myList = new LinkedList();
myList.add(1);
myList.add(5);
myList.add(12);
myList.add(456);
myList.add(1027);
myList.print();
let newNode = myList.find(1022);
console.log(newNode === null || newNode === void 0 ? void 0 : newNode.data);

import { ListNode, LinkedList } from "../Singly_Linked";

export class DoublyNode extends ListNode {
    public next: DoublyNode | null;
    public previous: DoublyNode | null;

    constructor(data: number, next: DoublyNode | null = null, previous: DoublyNode | null = null) {
        super(data);
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList extends LinkedList {
    private head2: DoublyNode | null;

    constructor() {
        super()
        this.head2 = null;
    }

    add(data: number) {
        const node = new DoublyNode(data);
        let current;

        if (!this.head2) {                  //if the list is empty
            this.head2 = node;
            node.previous = null;
        } else {
            current = this.head2;

            while (current.next) {          //find the last element
                current = current.next;
            }

            current.next = node;
            node.previous = current;
        }

        node.next = null;
        this.size++;
    }

    remove(value: number) {
        let current = this.head2;

        if (!current) {
            return;
        }

        while (current && current.data !== value) {
            current = current.next;
        }

        if (!current) {
            return;
        }

        //if it's the first element
        if (!current.previous) {
            if (!current.next) {                //if the list has one element only
                this.head2 = null;
                this.size--;
                return;
            } else {                            //if the list has more than one element
                current = current.next;
                this.head2 = current;
                current.previous = null;
                this.size--;
                return;
            }
        } else if (!current.next) {             //if it's the last element
            current = current.previous;
            current.next = null;
            this.size--;
            return;
        } else {                                //if if's a middle element
            current.previous.next = current.next;
            current.next.previous = current.previous;
            this.size--;
            return;
        }
    }

    print() {
        let current = this.head2;

        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

    find(value: number): DoublyNode | null {
        let current = this.head2;

        if(!current){
            return null;
        }

        while(current){
            if(current.data === value){
                return current;
            }

            current = current.next;
        }

        return null;
    }

    deleteDups() {
        const set = new Set<number>();
        let current = this.head2;

        while(current){
            if(set.has(current.data)){
                this.remove(current.data);
            } else{
                set.add(current.data);
            }

            current = current.next;
        }
    }
}
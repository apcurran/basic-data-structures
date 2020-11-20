"use strict";

class LinkedList {
    constructor() {
        this.head = null; // First el of list
        this.tail = null; // Last el of list
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        if (this.tail) {
            this.tail.next = newNode; // Update old tail's next property
        }

        this.tail = newNode; // Replace old tail with the new node

        // Check if this appended node is the first node in the linked list
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };

        this.head = newNode;

        // If prepend is called on an empty linked list, make this node the tail as well
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    toArray() {
        let elementsArr = [];
        let currNode = this.head;

        while (currNode) {
            elementsArr.push(currNode);
            currNode = currNode.next;
        }

        return elementsArr;
    }
}

const myLinkedList = new LinkedList();

myLinkedList.append(1);
myLinkedList.append("Hey");
myLinkedList.append(true);
myLinkedList.prepend("First value");

console.log(myLinkedList.toArray());
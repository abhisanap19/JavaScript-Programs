/**
 * creating a class node to create any new node with null values.
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
/**
 * creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertAt,insertFrom.
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
      /**
       * creating a new node
       */
        var node = new Node(element);
        /**
         * to store current node */
        var current;
        /**
         * if list is empty add an element and make it head. */
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }   
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {    
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            /**
             * add element to first index */
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0; 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                /** adding an element */ 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        /**
         * remove element from given index  */
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            /** deleting first element */ 
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                /** 
                 * remove the element */ 
                prev.next = curr.next;
            }
            this.size--;
            /**
             *  return the remove element */
            return curr.element;
        }
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {      
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
       /** 
        *  not found */
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        console.log(this.size);
    }

    printList() {
        /**
         * print the given list after performing changes.
         */
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element+" ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    GetNth(index) 
    {       
        var  current = this.head; 
        var count = 0; 
        while (current != null) 
        { 
            if (count == index) 
                return current.element; 
            count++; 
            current = current.next; 
        } 
        return 0; 
    }
}
fs = require('fs');
    module.exports = {
    unorderedList(arr, ele) {
        var l = new LinkedList();
        for (var i = 0; i < arr.length; i++) {
            l.add(arr[i]);
        }  
        if (l.indexOf(ele) == -1) {
            l.add(ele);
            l.printList();
            console.log("added successfully..")
        }
        else {
            l.removeElement(ele);
            l.printList();
            console.log("Removed successfully....")
        }  
        /**
         * write operation to save updated list into the file.
         */
        var datawrite=l.printList();
        fs.writeFileSync("/home/admin1/Documents/BridgeLabzz/Datastructures/file.txt",datawrite); 
}
}
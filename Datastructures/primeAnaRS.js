let prompt = require('prompt-sync')();
var utility1 = require('../Datastructures/utility/LinkedList');
var utility=require('../Datastructures/utility/Array');
var utility3=require('../Datastructures/utility/stack');

let prime = [];
let anag = [];
function anareverseStack(){
    /**
     * accepting min and max value to get prime number between that range.
     */
    let min=prompt('Enter min value: ');
    let max=prompt('Enter max value: ');
    prime = utility.prime(min,max);
    /**
     * creating an array for anagram of prime number.
     */
    let anagram = [];
    for (let i = 0; i < prime.length - 1; i++) {
        for (let j = i + 1; j < prime.length; j++) {
            index1 = prime[i].toString();
            index2 = prime[j].toString();
            /**
             * store index1 and index2 in res1. */
            let res1 = utility.anagrams(index1, index2);
            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);
            }   }
    }
    anag= removeDuplicates(anagram);
    console.log('Anagrams in the range are :' + anag);
    function removeDuplicates(arr) {
        let unique_array = [];
        for (let i = 0; i < arr.length; i++) {
            if (unique_array.indexOf(arr[i]) == -1) {
                unique_array.push(arr[i])
            }
        }
        return unique_array;
    }
    let linklist = new utility1();
    for (let i = 0; i < anag.length; i++) {
        linklist.add(anag[i]);
    }
    //let res = linklist.printList();
    //console.log(res);
    let stack = new utility3();
    for (let i = 0; i < anag.length; i++) {
        let temp = linklist.GetNth(i);
        stack.push(temp);
    }
    let print = stack.printStack();
    console.log('elements in stack are :' +print);

    console.log("Reverse order anagrams are:");
    /**
     * reversing the anagram stored in stack.
     */
    for (let i = anag.length; i > 0; i--) {   
        console.log(stack.pop());
    }
}
anareverseStack();








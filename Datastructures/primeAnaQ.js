let prompt = require('prompt-sync')();
var utility1 = require('./utility/LinkedList');
var utility=require('./utility/Array');
var utility3=require('./utility/queue');

let prime = [];
let anag = [];
function anareverseStack(){ 
    let min=prompt('Enter min value: '); 
    let max=prompt('Enter max value: ');
    prime = utility.prime(min,max);
    let anagram = [];
    for (let i = 0; i < prime.length - 1; i++) {
        for (let j = i + 1; j < prime.length; j++) {
            index1 = prime[i].toString();
            index2 = prime[j].toString();
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
    let res = linklist.printList();
    console.log(res);
    let queue = new utility3();
    for (let i = 0; i < anag.length; i++) {
        let temp = linklist.GetNth(i);
        queue.enQueue(temp);
    }
    let print = queue.printQueue();
    console.log('elements in queue are :' +print);
  
}
anareverseStack();








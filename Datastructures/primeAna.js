let prompt = require('prompt-sync')();

let utility = require('../Datastructures/utility/Array');
let prime = [];
function primeAnagram() {
    let min = prompt(' Enter min value: ');
    let max = prompt(' Enter max value: ');
    prime = utility.prime(min,max);
    let anagram = [];
    let anagramNot = [];
    for (let i = 0; i < prime.length - 1; i++) {
        for (let j = i + 1; j < prime.length; j++) {
            index1 = prime[i].toString();
            index2 = prime[j].toString();
        var res1 = utility.anagrams(index1, index2);
            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);
            }
            else if(!res1){
                anagramNot.push(prime[i]);
                anagramNot.push(prime[j]);
            }     }
    }
    let anag = []
    let anagN = [];
    anag = removeDuplicates(anagram);
    anagN = removeDuplicates(anagramNot);
    let res = [];
    res.push(anag);
    res.push(anagN);
     console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');
     console.log(res);
    function removeDuplicates(arr) {
        let unique_array = [];
        for (let i = 0; i < arr.length; i++) {
            if (unique_array.indexOf(arr[i]) == -1) {
                unique_array.push(arr[i])
            }
        }
        return unique_array;
    }
}
primeAnagram();



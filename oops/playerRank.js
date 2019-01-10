var utilityQueue = require('../oops/Queue'); 
var sort= require('../oops/sorting');

//arr1 is array of suits
var arr1 = ["Hearts","Diamonds", "Spades","Clubs"];

//arr2 is array of rank
var arr2 = ["Jack", "Queen", "King", "Ace","2", "3", "4", "5", "6", "7", "8", "9", "10"];

//calculating length by multiplying length of the arrays
var n = arr1.length * arr2.length;

//defined the new array
var arr3 = new Array(n);

for (var i = 0; i < arr2.length; i++) 
{
    for (var j = 0; j < arr1.length; j++) 
    {
            arr3[arr1.length*i + j] = arr2[i] + " of " + arr1[j];
    }
}
function shuffle()
{
    for (var i = 0; i < n; i++) 
    {
        var random = i + parseInt(Math.random() * (n-i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }
}
//for Adding cards in arr3  
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        var queue = new utilityQueue();
        queue.enQueue(arr);
        i++;
}
console.log("Cards receieved by Person 1-");
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        var queue1 = new utilityQueue();
        queue1.enQueue(arr);
        i++;
        arr2.sort(function(a, b){return a-b;});
        console.log(arr);
       
}
console.log("Cards receieved by Person 2-");
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        var queue2 = new utilityQueue();
        queue2.enQueue(arr);
        i++;
        console.log(arr);       
}  
console.log("Cards receieved by Person 3-");
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        var queue3 = new utilityQueue();
        queue3.enQueue(arr);
        i++;
        console.log(arr);
}
//remaining cards given to the 4th person
console.log("Cards receieved by Person 4-");
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        var queue3 = new utilityQueue();
        queue3.enQueue(arr);
        i++;
        console.log(arr);
}



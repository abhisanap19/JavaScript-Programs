
var prompt=require('prompt-sync')();
var Utility=require('../utility/Utility.js')
    function InsertionSort() {
    var size=prompt('enter no of size: ');
    Utility.InsertionSort(size);
    
    }
    InsertionSort();


var prompt=require('prompt-sync')();
var Utility=require('../utility/Utility.js')
    function bubbleSort() {
    var size=prompt('enter no of size: ');
    Utility.bubbleSort(size);
    
    }
    bubbleSort();
var Utility=require('../utility/Utility.js')
var prompt=require('prompt-sync')();
    function mergeSort() {
    var size=prompt('enter no of size: ');
    Utility.mergeSort(size);
    }
    mergeSort();
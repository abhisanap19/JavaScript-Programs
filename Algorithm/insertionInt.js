var prompt=require('prompt-sync')();


    var Utility=require('../utility/Utility.js');
    function insertionInteger()
    {
    var size=prompt('enter the size: ');
    start=Utility.getCurrentTime();
    Utility.insertionInteger(size);
    stop=Utility.getCurrentTime();
    res=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    insertionInteger();
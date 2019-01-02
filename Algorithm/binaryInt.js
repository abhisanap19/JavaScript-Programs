var prompt=require('prompt-sync')();


    var Utility=require('../utility/Utility.js');
    function binaryInt()
    {
    var size=prompt('enter the size: ');
    start=Utility.getCurrentTime();
    Utility.binaryInt(size);
    stop=Utility.getCurrentTime();
    res=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    binaryInt();
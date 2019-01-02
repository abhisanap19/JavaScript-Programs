var prompt=require('prompt-sync')();


    var Utility=require('../utility/Utility.js');
    function insertionsortString()
    {
    var size=prompt('enters the size: ');
    start=Utility.getCurrentTime();
    Utility.insertionsortString(size);
    stop=Utility.getCurrentTime();
    res=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    insertionsortString();
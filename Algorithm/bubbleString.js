var prompt=require('prompt-sync')();


    var Utility=require('../utility/Utility.js');
    function bubblesortString()
    {
    var size=prompt('enter the size: ');
    
    start=Utility.getCurrentTime();
    Utility.bubblesortString(size);
    stop=Utility.getCurrentTime();
    
    res=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    bubblesortString();
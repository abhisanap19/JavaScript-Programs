var prompt=require('prompt-sync')();


    var Utility=require('../utility/Utility.js');
    function bubblesortInteger()
    {
    var size=prompt('enter the size: ');
    
    start=Utility.getCurrentTime();
    Utility.bubblesortInteger(size);
    stop=Utility.getCurrentTime();
    
    res=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res+" secs");
    }
    bubblesortInteger();
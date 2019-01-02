var prompt=require('prompt-sync')();
var Utility=require('../utility/Utility.js');

    function test() {
    var size=prompt('enter the size: ');

    start=Utility.getCurrentTime();
    Utility.binaryInt(size);
    stop=Utility.getCurrentTime();
    res1=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res1+" secs");

    start=Utility.getCurrentTime();
    Utility.binarystring(size);
    stop=Utility.getCurrentTime();
    res2=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res2+" secs");

    start=Utility.getCurrentTime();
    Utility.insertionInteger(size);
    stop=Utility.getCurrentTime();
    res1=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res3+" secs");

    start=Utility.getCurrentTime();
    Utility.insertionsortString(size);
    stop=Utility.getCurrentTime();
    res1=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res4+" secs");

    start=Utility.getCurrentTime();
    Utility.bubblesortInteger(size);
    stop=Utility.getCurrentTime();
    res1=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res5+" secs");


    start=Utility.getCurrentTime();
    Utility.bubblesortString(size);
    stop=Utility.getCurrentTime();
    res1=Utility.getElapsedTime(start,stop);
    console.log("elapse time: "+res6+" secs");


    }
    test();
var Utility=require('../utility/Utility.js');

    var read=Utility.input();
    read.question("Press 1 to start:",function(startTime)
    { 
        if ((startTime>= 'a' && startTime <= 'z') || (startTime >= 'A' && startTime <= 'Z') || startTime>1)
           {
               console.log("plz enter your choice with 1 only");
           }
           else{
                   startTime=Utility.getTime();
           }
        
        if(startTime)
        {
            read.question("press 2 to stop:",function(stopTime)
            {
                if ((stopTime>= 'a' && stopTime <= 'z') || (stopTime >= 'A' && stopTime <= 'Z') || stopTime>2)
                {
                    console.log("plz enter your choice with 1 only");
                }
                else{
                    stopTime=Utility.getTime();
                    elapsed=Utility.getElapsedTime(startTime,stopTime);
                console.log("Elapsed time: "+elapsed+"sec");
                }
            } 
            );
        }
   }  
    );

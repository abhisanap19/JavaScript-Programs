var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find  elapsed time from current time.
 * @file    : stopwatch.js
 * @overview: To Write a Stopwatch Program for measuring the time that elapses between the start
 *            and end clicks  
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ************************************************************************************/
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

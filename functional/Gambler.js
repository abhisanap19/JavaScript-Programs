var Utility=require('../utility/Utility.js');


function gambling()
{
    var read=Utility.input();
     read.question("Enter $stake:",function(stake)
     {
        if ((stake>='a'&&stake<='z')||(stake>='A'&&stake<='Z'))
        {
            console.log("plz enter integers only");
        }
        else{
         read.question("Enter $goal:",function(goal)
         {
             read.question("Enter no. of trails:",function(num)
             {
                Utility.gambling(stake,goal,num);
             }
             )
         }
           
         )
        }
            read.close();
        }
     );
        
    
}
gambling();



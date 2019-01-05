var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find number of wins and percentage of wins through gambling.       
 * @file    : Gambler.js
 * @overview: Play till the gambler is broke or has won Print Number of Wins and Percentage              
 *            of Win and Loss.  
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 25/12/2018 
 ***************************************************************************/
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



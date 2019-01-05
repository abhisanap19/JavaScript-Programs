var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To count percentage of heads and tails.         
 * @file    : flipcoin.js
 * @overview: To flip a coin N no. of times and randomly generate a number and print percentage of heads and tails 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 24/12/2018 
 ***************************************************************************/
function flipcoin()
{
    var read=Utility.input();
    read.question("enter number of times to flip the coin: ",function(st)
    {
        if ((st>='a'&&st<='z')||(st>='A'&&st<='Z'))
        {
            console.log("plz enter integers only");
        }
        else
        {
            Utility.flipcoin(st);
           
        }  
         read.close();  
    }
);
}
flipcoin();

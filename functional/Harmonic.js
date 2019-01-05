var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To print nth harmonic number.       
 * @file    : Harmonic.js
 * @overview: to take number from user and ensure it is not equal to 0.  
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 25/12/2018 
 ***************************************************************************/
function Harmonic()
{
    var read=Utility.input();
    read.question("Enter value of N:",function(N)
    {
        Utility.Harmonic(N);
        read.close();
    } 
    );
}
Harmonic();

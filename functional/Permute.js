var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To Check if the arrays returned by two string functions are equal.
 * @file    : Permute.js
 * @overview: to return all permutations of a string.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ************************************************************************************/
function doPermute()
{
    var read=Utility.input();
     read.question("Enter a string:",function(str) 
    {    
        Utility.doPermute(str);
    }
    )
}
doPermute();
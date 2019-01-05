
var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To check if year is leap year or not.       
 * @file    : leapYear.js
 * @overview: To take year from user which must be divisible by 4 and 400 and must not divisible
 *            by 100 if by 4 and print leap year. 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 24/12/2018 
 ***************************************************************************/

function leapYear()
{

    var read=Utility.input();
    read.question("enter a 4 digit no:",function(year)
    {
        
        Utility.leapYear(year);
        read.close();
    }
);
}

leapYear();
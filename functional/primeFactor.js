var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find prime factors of a number.      
 * @file    : primeFactor.js
 * @overview: To take number from user and find its factor and print it in array. 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 25/12/2018 
 ***************************************************************************/
function primeFactor()
{
   var read=Utility.input();
   read.question("Enter a number:",function(number)
   {
       Utility.primeFactor(number);
       read.close();
   } 
   );
}
primeFactor();
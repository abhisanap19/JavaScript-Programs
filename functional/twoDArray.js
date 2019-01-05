var prompt=require('prompt-sync')();
var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To read in 2D arrays of booleans,integers or doubles and print them out       
 * @file    : twoDArray.js
 * @overview: to take elements from user for integer,double or boolean and print it in 2D array. 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ***************************************************************************/
function array() {
var row=prompt('enter no of rows');
Utility.array(row);
}
array();


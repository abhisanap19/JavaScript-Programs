
var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find power of two through command line      
 * @file    : power.js
 * @overview: To take command line for getting power of two which should not exceed 31.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 24/12/2018 
 ***************************************************************************/
function findPower()
{ 
    var num=+process.argv[2];
    Utility.findPower(num);

}
findPower();

var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To calculate Euclidean distance.
 * @file    : Distance.js
 * @overview: takes two integer command­line arguments x and y and prints the Euclidean distance 
 *            from the point (x, y) to the origin (0, 0)
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ************************************************************************************/
function getDistance()
{ 
    var x=+process.argv[2];
    var y=+process.argv[3];
    Utility.getDistance(x,y);
}
getDistance();


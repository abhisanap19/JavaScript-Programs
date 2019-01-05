var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find windchill through command line.
 * @file    : WindChill.js
 * @overview: Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
              the National Weather Service defines the effective temperature (the wind chill) 
              to be calculated.              
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ************************************************************************************/
function findWC()
{  
    var t=+process.argv[2];
    var v=+process.argv[3];
    Utility.findWC(t,v);
}
findWC();
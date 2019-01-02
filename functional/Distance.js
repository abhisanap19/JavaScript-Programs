
var Utility=require('../utility/Utility.js');


function getDistance()
{
   
     
    var x=+process.argv[2];
    var y=+process.argv[3];
    Utility.getDistance(x,y);

}
getDistance();


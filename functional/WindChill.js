var Utility=require('../utility/Utility.js');



function findWC()
{
      
    var t=+process.argv[2];
    var v=+process.argv[3];
    Utility.findWC(t,v);
}

findWC();
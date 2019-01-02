var Utility=require('../utility/Utility.js');



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
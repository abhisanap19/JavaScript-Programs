
var Utility=require('../utility/Utility.js');


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
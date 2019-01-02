var Utility=require('../utility/Utility.js')

function newtonsqrt()
{
    var read=Utility.input();
    read.question("enter a number: ",function(c)
    {
            Utility.newtonsqrt(c);
            read.close();
    });
}

newtonsqrt();
var Utility=require('../utility/Utility.js')


function binarynibbles()
{
    var read=Utility.input();
    read.question("Enter a number: ",function(n)
    {
        if((n>='a'&&n<='z')||(n>='A'&&n<='Z'))
        {
            console.log("plz enter integers only");
        }
        else
        Utility.binarynibbles(n);
        read.close();
    }
    );
    
}
binarynibbles();
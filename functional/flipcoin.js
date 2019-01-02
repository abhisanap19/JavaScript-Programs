var Utility=require('../utility/Utility.js');

function flipcoin()
{
    var read=Utility.input();
    read.question("enter number of times to flip the coin: ",function(st)
    {
        if ((st>='a'&&st<='z')||(st>='A'&&st<='Z'))
        {
            console.log("plz enter integers only");
        }
        else
        {
            Utility.flipcoin(st);
           
        }  
         read.close();  
    }
);
}
flipcoin();

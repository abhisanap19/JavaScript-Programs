var Utility=require('../utility/Utility.js')

function toBinary()
{
    var read=Utility.input()
    
        read.question("Enter a num: ",function(num)
        {
            Utility.toBinary(num);
            read.close();
        }
        );
    
}
toBinary();

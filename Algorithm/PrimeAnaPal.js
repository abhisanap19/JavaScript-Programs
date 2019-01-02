var Utility=require('../utility/Utility.js')



function primeanapal()
{
    var read=Utility.input();
    read.question("Enter the min value: ",function(min)
    {
        read.question("Enter the max value: ",function(max)
        
        {
            Utility.primeanapal(min,max);
            read.close();
        }
        
        )
    }
    
    );
    
   

}
primeanapal();
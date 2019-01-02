var Utility=require('../utility/Utility.js');


function primeFactor()
{
   var read=Utility.input();

   read.question("Enter a number:",function(number)
   {
       Utility.primeFactor(number);
       read.close();

   }
   
   
   );


}


primeFactor();
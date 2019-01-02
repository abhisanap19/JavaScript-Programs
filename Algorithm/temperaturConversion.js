var Utility=require('../utility/Utility.js')



function temperature()
{
    var read=Utility.input();
    read.question("enter 1 to convert  a celsius to Fahrenheit and 2 to convert vice-versa: ",function(option)
    {
            utility.temperature(read,option);
            
        
    });
}

temperature();
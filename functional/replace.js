

var Utility=require('../utility/Utility.js');


function replace()
{  
    var read=Utility.input();
    read.question("enter your name:",function(userinput)
    {
        if(typeof(userinput)== String){
            Utility.replace(userinput);
           read.close();
        }
        else{
        console.log("plz enter a string..");
        }
    }
);
}
replace();
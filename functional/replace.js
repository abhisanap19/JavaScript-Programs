
var Utility=require('../utility/Utility.js');

/*****************************************************************************************
 *purpose   : To Replace String Template “Hello <<UserName>>, How are you?”         
 * @file    : replace.js
 * @overview:User Input and Replace String Template “Hello <<UserName>>, How are you?” 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 24/12/2018 
 ***************************************************************************/
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
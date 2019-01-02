
var Utility=require('../utility/Utility.js');
var utility=require('../Datastructures/utility/stackOp');
function simpleB()
{
    var read=Utility.input();
    read.question("Enter an expression:",function(expression)
    {
        /**
         * if expression is null then print an error message.*/
        if(expression==""){
            console.log("plz enter an expression");
             }
             else
             utility.simpleB(expression);
             read.close();
    } 
    )  
}
simpleB();
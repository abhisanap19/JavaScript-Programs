
var Utility=require('../utility/Utility.js');
var utility=require('../Datastructures/utility/stackOp');

/*****************************************************************************************
 *purpose   :Take an Arithmetic Expression such that parentheses are used to order the
            performance of operations.Ensure parentheses must appear in a balanced fashion.          
 * @description
 * @file    : simpleBal.js
 * @overview:We will take and expression then if the brace opens we will push elements using 
 *           stack and while closeing we will pop the elements then will check if the parantheses
 *           is balanced or not and return true or false.   
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 29/12/2018 
 ***************************************************************************/
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

var read=require('readline-sync');
var utility=require('../Datastructures/utility/queueOp');
/*****************************************************************************************
 *purpose  :Create a Program which creates Banking Cash Counter where people come in to deposit 
            Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit
            or withdraw money and dequeue the people. Maintain the Cash Balance.          
 * @description
 * @file    : Banking.js
 * @overview:we will create a queue to add people while they perform withdrawal or deposit and 
 *           maintain the queue to add from rear and remove from front of queue through enqueue
 *           and dequeue operations 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 29/12/2018 
 ***************************************************************************/
function Banking()
{
    /**
     * read the value of persons from user to perform queue operations.
     */
    var input=read.question("Enter the number of persons: ");
    /**
     * validating if found any character string.
     */
    if(input>='a'&&input<='z'||input>='A'&&input<='Z'){
        console.log("Plz enter integers only....");
    }
    else{
    utility.Banking(read,input);
    }
}
Banking();
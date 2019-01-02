
var read=require('readline-sync');
var utility=require('../Datastructures/utility/queueOp');
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
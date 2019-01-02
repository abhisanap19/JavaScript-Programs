var fs = require('fs');
var Utility=require('../utility/Utility.js');
var utility=require('../Datastructures/utility/OrderedLinkList');
var data = fs.readFileSync('file1.txt');
data= data.toString().split(' ');
/*****************************************************************************************
 *purpose  :Read a List of Numbers from a file and arrange it ascending Order in a Linked list
            Take user input for a number, if found then pop the number out of the list else 
            insert the number in appropriate position.         
 * @description
 * @file    :OrderedList.js
 * @overview:We read a integer string from file then perform linked list operations and then we 
 *           arrange it in sorted manner,we will search an integer if it is found then delete
 *           it and if not found then add it.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 28/12/2018 
 ******************************************************************/
function orderedList()
{ 
    /**
    * here we read the input from user that input function stored in utility.
    */
    var read=Utility.input();
    read.question("Enter the element to be searched: ", function(num){
        /**
         * Validating the element which should not accept any string value.
         */
        if((num>='a' && num<='z')|| (num>='A' && num<='Z')){
            console.log("plz enter integers only..")
        }
        else
        utility.orderedList(data,num);
        read.close();
    });
}
orderedList();

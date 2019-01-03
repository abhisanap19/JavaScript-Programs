var Utility=require('../utility/Utility.js');
var utility=require('../Datastructures/utility/UnOrderedlinkedList');

var data = fs.readFileSync('file.txt');
console.log("String read from file: "+data)
data= data.toString().toLocaleLowerCase().split(' ');

/*****************************************************************************************
 *purpose  :Read the Text from a file, split it into words and arrange it as Linked List.
            Take a user input to search a Word in the List. If the Word is not found then add it
            to the list, and if it found then remove the word from the List. In the end save the
            list into a file.          
 * @description
 * @file    : unorderedList.js
 * @overview:We read a string from file then perform linked list operations and then we search 
 *           elements from list if it is available then delete and if not available then add it.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 28/12/2018 
 ***************************************************************************/

function unorderedList()
{
    /**
     * here we read the input from user that input function stored in utility.
     */
    var read=Utility.input();
    read.question("Enter the element to search: ",function(ele)
    {
        /**
         * Validating the element which should not accept any integer value.
         */
        if(ele>='a'&&ele<='z'||ele>='A'&&ele<='Z'){
            utility.unorderedList(data,ele); 
        }
        else
        console.log("plz enter a string...");
        read.close();
    } 
    );  
}
unorderedList();
                                                                                                                                                                                                                                                                                             
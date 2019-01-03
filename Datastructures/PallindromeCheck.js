var utility=require('../Datastructures/utility/Dequeue')
var Utility=require('../utility/Utility');
/*****************************************************************************************
 *purpose  :A palindrome is a string that reads the same forward and backward,forexample,
            radar,toot,and madam. We would like to construct an algorithm to input a string
            of characters and check whether it is a palindrome.      
 * @description
 * @file    : PallindromeCheck.js
 * @overview:we will take dequeue here to check a string of character from left to right
 *           and then pop the characters from front and rear and if it matches then its a 
 *           pallindrome otherwise its not a pallindrome.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 31/12/2018 
 ***************************************************************************/
function Pallindrome(){
    var read=Utility.input();
    read.question("Enter a string: ",function(str)
    {
        if(str>='a'&&str<='z'||str>='A'&&str>='Z'){
            utility.Pallindrome(str);    
        }
        /**
         * check if string is empty
         */
        else if(str==""){
            console.log("Plz enter a string....");
        }
        /**
         * if its not charcter string it will print error msg
         */
        else
        console.log("Plz enter a character string only...");
        read.close();
    }
    );
}
Pallindrome();
/*****************************************************************************************
 *purpose   : To Print the Modified Message with proper validation.      
 * @file    : RegularExp.js
 * @overview: Read the given message then then replace the data with proper values and print modified message.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 03/01/2019 
 ************************************************************************************/
var prompt = require('prompt-sync')();
var Utility = require('../oops/RegularExp.js');

/**
 * To Read the given message then then replace the data with proper values and print modified message
 * @param res@param res1@param res2@param res3 -which stores the result into the string for replaced data.
 */
function RegularExp()
{
    var res,res1,res2,res3;
    //strings to read and replace data with proper value
    var str = "Hello <<name>>, we have your full name as <<full name>> in our system. ";
    var str1 = "your contact number is <<9xxxxxxxxx>>. ";
    var str2 = "Thank you! Bridgelabz <<dd-mm-yyyy>>. ";
    //name,contact and special character restrictions
    a= /[a-z]/g;
    b= /[0-9]/g;
    c=/[!@#$%^&*()<>+-/"'?]/g;
    var name = prompt("please enter your name: ");
    //validating name and check if length is greater than 3 or not
    if((a.test(name) && name.length >3) && !b.test(name))
    {
        //replace with proper name value
        res= str.replace(/<<name>>/,name);
    }else
    {
        console.log("Invalid name");
        return false;
    }
    var fullname = prompt("please enter your fullname: ");
    //validate fullname
    if((a.test(fullname) && fullname.length >3) && !b.test(fullname))
    {
        //replace with proper fullname value
        res1 = res.replace(/<<full name>>/,fullname);
    }else
    {
        console.log("Invalid fullname");
        return false;
    }
    
    var phoneno = prompt("please enter your phone no: ");
    //validate phone number and check if lenght is exactly 10
      if((b.test(phoneno) == true && phoneno.length == 10) && !a.test(phoneno))
    {
        res2 = str1.replace(/<<9xxxxxxxxx>>/,phoneno);
        //console.log(res2);
    }else
    {
        console.log("Invalid phone number");
        return false;
    }
    //add result for 2 strings
    console.log(res1+" "+res2);
    //system date
    var d = new Date();
    var date = d.getDate()+" /"+(d.getMonth()+1)+"/ "+d.getFullYear();
    res3 = str2.replace(/<<dd-mm-yyyy>>/,date);
    console.log(res3);
}RegularExp();






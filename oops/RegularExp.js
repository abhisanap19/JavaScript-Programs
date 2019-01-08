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
function RegularExp()
{
    var res,res1,res2,res3;
    var str = "Hello <<name>>, we have your full name as <<full name>> in our system. ";
    var str1 = "your contact number is <<9xxxxxxxxx>>. ";
    var str2 = "Thank you! Bridgelabz <<dd-mm-yyyy>>. ";
    a= /[a-z]/g;
    b= /[0-9]/g;
    c=/[!@#$%^&*()<>+-/"'?]/g;
    var name = prompt("please enter your name: ");
    if((a.test(name) && name.length >3) && !b.test(name))
    {
        res= str.replace(/<<name>>/,name);
    }else
    {
        console.log("Invalid name");
        return false;
    }
    var fullname = prompt("please enter your fullname: ");
    if((a.test(fullname) && fullname.length >3) && !b.test(fullname))
    {
        res1 = res.replace(/<<full name>>/,fullname);
    }else
    {
        console.log("Invalid fullname");
        return false;
    }
    
    var phoneno = prompt("please enter your phone no: ");
      if((b.test(phoneno) == true && phoneno.length == 10) && !a.test(phoneno))
    {
        res2 = str1.replace(/<<9xxxxxxxxx>>/,phoneno);
        //console.log(res2);
    }else
    {
        console.log("Invalid phone number");
        return false;
    }
    console.log(res1+" "+res2);
    var d = new Date();
    var date = d.getDate()+" /"+(d.getMonth()+1)+"/ "+d.getFullYear();
    res3 = str2.replace(/<<dd-mm-yyyy>>/,date);
    console.log(res3);

}RegularExp();






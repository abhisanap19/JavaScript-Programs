// var prompt=require('prompt-sync')();
// var Utility=require('../oops/RegularExp.js');
// //fs=require('fs');
// //var data=fs.readFileSync('Regular.txt');
// function RegularExp(){

//     var result,result1,result2,result3,fullname;
//     var str="Hello <<name>>,We have your full name as <<full name>> in our system.";
//     var str1="your contact number is 91­xxxxxxxxxx.";
//     var str2="Please,let us know in case of any clarification Thank you BridgeLabz <<dd-mm-yyyy>>."
//         var a=/[a-zA-Z]/g;
//         var b=/[0-9]/g;
//         var c=/[!@#$%^&*()<>+-/"'?]/g;
        
//         var name=prompt('Enter a name: ');
//         if(a.test(name) && name.length>3)                                                                )
//         {
//            var result=str.replace(/<<name>>/,name);
//         }
//          else
//         {
//             console.log("Plz enter valid name");
//         }

//         var fullname=prompt('Enter fullname: ');
//         if(fullname.search(b)==-1 && fullname.search(c)==-1){
//             var r2=r1.replace(/<<full name>>/,fullname);
//         }
//         else{
//             console.log("Plz enter valid fullname");
//             process.exit();
//         }
//         var phoneno=prompt('Enter phone no: ');
//         if(phoneno.length==10){
//              if(phoneno.search(a)==-1 && phoneno.search(c)==-1){
//                  var r3=str1.replace(/91­xxxxxxxxxx/,phoneno);
//              }
//              else{
//                  console.log("plz enter valid phoneno");
//                  process.exit();
//              }
//         } 
//         else{
//             console.log("plz enter vallid pn");
//             process.exit();
//         }

//         var date=new Date();
//         var newdate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
//         var r3=str2.replace(/<<dd-mm-yyyy>>/,newdate);
//         console.log(r3);
// }
// RegularExp();

var prompt = require('prompt-sync')();
var Utility = require('../oops/RegularExp.js');
//var regex = require("regex");
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
        res= str.replace(/<<name>>/g,name);
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
      if((b.test(phoneno) == true && phoneno.length == 10) && !a.test(name))
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






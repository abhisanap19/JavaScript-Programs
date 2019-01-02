var utility=require('../Datastructures/utility/Dequeue')
var Utility=require('../utility/Utility');

function Pallindrome(){
    var read=Utility.input();
    read.question("Enter a string: ",function(str)
    {
        if(str>='a'&&str<='z'||str>='A'&&str>='Z'){
            utility.Pallindrome(str);
            
        }
        else if(str==""){
            console.log("Plz enter a string....");
        }
        else
        console.log("Plz enter a character string only...");
        read.close();
    }
    );
}
Pallindrome();

var Utility=require('../utility/Utility.js')


function anagram()
{
    var read=Utility.input();

    read.question("Enter 1st string: ",function(str1)
    {
        read.question("Enter 2nd string: ",function(str2)
        
        {
            if(typeof(str1)==String && typeof(str2)==String)
            {
            Utility.angaram(str1,str2);
            read.close();
            }
            else{
                console.log("plz enter string");
            }
        }
        )
    }
    );
}

anagram();
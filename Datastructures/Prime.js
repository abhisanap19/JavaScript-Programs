var utility=require('../Datastructures/utility/Array');
var Utility=require('../utility/Utility');
function prime(){
    var read=Utility.input();
    read.question("Enter min value: ",function(min)
    {
        read.question("Enter max value: ",function(max)
        {
            if(min>='a'&&min<='z'|| min>='A'&& min<='Z'){
                console.log('Plz enter integers only..');
            }
            else
            utility.checkPrime(min,max);
            read.close();
        })
    }
    );  
}
prime();
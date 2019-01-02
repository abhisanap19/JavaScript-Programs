var Utility=require('../utility/Utility.js')


var read=Utility.input();
function primeNumber()
{
read.question("Enter min value: ",function(a)
{
    read.question("Enter max value: ",function(b)
    {

        var min=parseInt(a);
        var max=parseInt(b);

        Utility.primeNumber(min,max);
        read.close();

    }
    
    );
}

);

}
primeNumber();
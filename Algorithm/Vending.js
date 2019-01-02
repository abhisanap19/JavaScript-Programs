var Utility=require('../utility/Utility.js')

function Notes()
{


var read=Utility.input();
read.question("Enter an amount you want to withdrawal: ",function(amount)

{
    Utility.Notes(amount);

    read.close();
}
);

}

Notes();
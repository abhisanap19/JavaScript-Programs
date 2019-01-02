var fs=require('fs');

var Utility=require('../utility/Utility.js');

var data=fs.readFileSync('input.txt');
data=data.toString().split(',');
function binarywordlist()
{
    var read=Utility.input();
    read.question("enter the element to search: ",function(element)
    {
        Utility.binarywordlist(data,element);
        read.close();
    });
}
binarywordlist();
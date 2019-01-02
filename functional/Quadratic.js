var Utility=require('../utility/Utility.js');






function findRoots()
{
    var read=Utility.input();

    read.question("Enter value of a:",function(a)
    {
        read.question("Enter value of b:",function(b)
        {
            read.question("Enter value of c:",function(c)
            {
                Utility.findRoots(a,b,c);
                read.close();
            })
        })
    });
}
findRoots();
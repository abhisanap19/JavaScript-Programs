var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : To find roots of given equation.
 * @file    : Quadratic.js
 * @overview: To take input values of equation from user to get roots for the given equation. 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 26/12/2018 
 ************************************************************************************/
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
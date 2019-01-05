
var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : One Output is number of distinct triplets as well as the second output is to
              print the distinct triplets.        
 * @file    : Triplets.js
 * @overview: A program with cubic running time. Read in N integers and counts the number of triples
 *            that sum to exactly 0.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 25/12/2018 
 ***************************************************************************/
function getTriplets()
{
  console.log("Enter no. of elements:");
  var rl=Utility.inputread();
  var arr=[];
  var arr=Utility.inputReadLineArray(arr,rl);
  console.log("Elements are:");
  for(let i=0;i<rl;i++)
  {
      console.log(arr[i]);
  }  
  var count=Utility.getTriplets(arr);
  console.log("No. of triplets found:",+count);
}
getTriplets();

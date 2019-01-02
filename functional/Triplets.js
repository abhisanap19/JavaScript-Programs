
var Utility=require('../utility/Utility.js');

function getTriplets()
{

  console.log("Enter no. of elements:");
  var rl=Utility.inputread();
 // console.log(rl);
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

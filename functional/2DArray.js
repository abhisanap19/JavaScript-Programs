var prompt=require('prompt-sync')();


var Utility=require('../utility/Utility.js');


//var prompt=require('prompt-sync')();
   // var utility=require('../utility/utility.js');
    function array() {
    var row=prompt('enter no of rows');
   // var coloumn=prompt('enter no of coloums');
    Utility.array(row);
    }
    array();

// function array()
// {
//     var read=Utility.input();
//     read.question("Enter no. of rows:",function(row)
//     {
//         read.question("Enter no. of column:",function(col)
        
//         {
              
//                read.question("Elements are:",function(arr)
               
//                {


//                 for(let i=0;i<row;i++)
//                         {
//                            //arr[i]=new Array(col);
//                         for(let j=0;j<col;j++)
//                             {
//                                 arr[i][j]=console.log('enter element: ');
//                             }
//                      }
//                    Utility.array(row,col,arr);
//                }
               
               
               
               
//                )

//         //     var rl=Utility.inputread();
//         //     var arr=[];
//         //  var arr=Utility.inputReadLineArray(arr,rl);
//         //  console.log("Elements are:");
//         //    for(let i=0;i<rl;i++)
//         //           {
//         //              console.log(arr[i]);

//         //              Utility.array(arr,row,col);
//         //           }  
//         }
        
//         )
//     }
//     );
// }

//array();
// var Utility=require('../utility/Utility.js')


// function dayofweek()
// {

//     var read=Utility.input();
//     read.question("enter month: ",function(month)
//     {
//         read.question("enetr day: ",function(day){
//             read.question("enter year: ",function(year){
//                 var m=parseInt(month);
//                 var d=parseInt(day);
//                 var y=parseInt(year);
//             Utility.dayofweek(m,d,y);
//             read.close();
//             });
//         });
//     });
// }

// dayofweek();



var Utility = require('../utility/Utility.js');


function dayOfWeek() {



        var day = +process.argv[2];
        var month = +process.argv[3];
        var year = +process.argv[4];

        if(day>31 || month>12)
        {

                console.log("Plz enter valid date and month");
        }
        else{
        Utility.dayOfWeek(day,month,year);
        }
    
}
dayOfWeek();
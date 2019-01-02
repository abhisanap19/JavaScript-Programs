
var Utility=require('../utility/Utility.js');
 function questionNumber()
 {   
    var number=+process.argv[2]; 
    
    //  var number = prompt('Enter the number : ')
    // var read=Utility.input();
     Utility.questionNumber(number)
 }
 questionNumber();
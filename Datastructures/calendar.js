var utility = require('../Datastructures/utility/Day');

function dayOfWeek(){
    
month=+process.argv[2];
year=+process.argv[3];
var day = utility.dayOfWeek((month),(year));
utility.display(month, day, year);
}
dayOfWeek();
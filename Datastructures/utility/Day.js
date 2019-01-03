var util = require('util');
module.exports = {
    dayOfWeek(month,year) {
        var y = parseInt(year);
        var m = parseInt(month);
        var d = parseInt(1);
        var day;
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
        d0 = parseInt(d0);
        switch (d0) {
            case 0:
                day = 0;
                break;
            case 1:
                day = 1;
                break;
            case 2:
                day = 2;
                break;
            case 3:
                day = 3
                break;
            case 4:
                day = 4;
                break;
            case 5:
                day = 5
                break;
            case 6:
                day = 6;
        }
        return day;
    },
    display(month, day, year) {
        if (month == 2) {
            feb
            if ((year % 4 == 0)&&(year % 100 != 0) || (year % 400 == 0)) {
                var feb = 29;
            } else {
                feb = 28;
            }
        }
        var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dayNames = ["S  M  T  W  Th  F S "];

        var dayPerMonth = [0,31,feb,31,30,31,30,31,31,30,31,30,31];

        var mon = new Array(7);

        for (var i = 0; i <= 7; i++) {
            mon[i] = new Array(7);
        }
        var weekdays = day;
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {
                mon[i][j] = 0
            }
        }
        for (var i = 0; i <= month; i++) {
            if (month == i)
                console.log(monthNames[i])
            var nd = dayPerMonth[i]
        }
        //console.log('Number of days in month:- ', nd);

        console.log(dayNames.toString(''));
        var count = 0;
        var j = 0;
        var days = day - 1
        var max = nd;

        var min = 1;
        for (i = 0; i < 7; i++) {
            for (j =0; j < 7; j++) {
                {
                    if (min <= max)
                        if (i == 0 && j <= days)
                            mon[i][j] = "   ";
                        else {

                             mon[i][j] = min;
                             min += 1
                        }
                }
            }
        }
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {
                   if(mon[i][j] !=0) 
                util.print(mon[i][j] + " ");
            }
            console.log();
        }
    }
}
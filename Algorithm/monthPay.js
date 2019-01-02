var Utility = require('../utility/Utility.js');


function monthPay() {
    var P = +process.argv[2];
    var Y = +process.argv[3];
    var R = +process.argv[4];
    Utility.monthPay(P, Y, R);
}

monthPay();
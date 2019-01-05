
fs=require('fs');
var Utility=require('../oops/stockReport.js');
let data=fs.readFileSync('stock.json');
let stock=JSON.parse(data);
console.log(stock);
function stockReport(){
     var n1=stock.stock1.no_ofshares;
     var n2=stock.stock1.price;
     var res1=n1*n2;
     console.log("The total stock price of "+stock.stock1.name+" is: " +res1+"$");

     var n3=stock.stock2.no_ofshares;
     var n4=stock.stock2.price;
     var res2=n3*n4;
     console.log("The total stock price of "+stock.stock2.name+" is: "+res2+"$");

     var n5=stock.stock3.no_ofshares;
     var n6=stock.stock3.price;
     var res3=n5*n6;
     console.log("The total stock price of "+stock.stock3.name+" is: "+res3+"$");

     var res4=res1+res2+res3;
     console.log("The total stock price is: "+res4+"$");
}
stockReport();


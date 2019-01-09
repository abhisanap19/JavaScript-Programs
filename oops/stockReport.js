/*****************************************************************************************
 *purpose   : To print the Stock Report.      
 * @file    : stockReport.js
 * @overview: N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share
 *            Price and calculate for each stock and total stock value.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 04/01/2019 
 ************************************************************************************/
var fs = require('fs')
var prompt = require('prompt-sync')();
/**
 * N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share
 * Price and calculate for each stock and total stock value.
 * @param name @param number @param price to add into inventory and calculate each stock price 
 */
function stock(){
fs.readFile('stock.json', function (err, data) {
    if (err) throw err
    var sum=0;
    var stocks = JSON.parse(data)
    //name and contact restriction
    a= /[a-z]/g;
    b= /[0-9]/g;
    console.log("enter 1 to insert");
    var option = prompt('enter the option: ');
    switch (parseInt(option)) {
        case 1: 
             var stock = prompt('enter number of stocks: ');
             //validating number of stocks
             if(b.test(stock)==false){
                console.log("Enter valid stock number!!");
                return false;
            }
            for (var i = 1; i <= stock; i++) {
                var name = prompt('enter the name: ');
                if(a.test(name)==false){
                    console.log("Plz enter valid name!!");
                    return false;
                }
                var number = prompt('enter the number of share: ');
                var price = prompt('enter the price: ');
                if(b.test(price)==false){
                    console.log("Plz enter valid price!!");
                    return false;
                }
                /*push the entries into the json such as name number and price into the user and perform
                further operation.
                */
                stocks.users.push({
                    "name": name,
                    "number_of_share": number,
                    "price": price
                })
                console.log(stocks);
                //print total price of each stock
                var num = parseInt(number * price);
                console.log("the total price of each stock is: " + num);
                sum = parseInt(sum + num);
                //write the file into the json and convert to string
                fs.writeFile('stock.json', JSON.stringify(stocks),function(err) {
                    if (err) throw err
                })
            }
            //print total value of stocks
            console.log("the total price of stock is: " + sum);
            break;
            default:
            console.log("Plz enter valid option!!")
    }
})

}stock();
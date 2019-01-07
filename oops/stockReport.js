var fs = require('fs')
var prompt = require('prompt-sync')();
fs.readFile('stock.json', function (err, data) {
    if (err) throw err
    var sum=0;
    var stocks = JSON.parse(data)
    console.log("enter 1 to insert");
   // console.log("enter 2 to delete");
    var option = prompt('enter the option: ');
    switch (parseInt(option)) {
        case 1: var stock = prompt('enter number of stocks: ');
            for (var i = 1; i <= stock; i++) {
                var name = prompt('enter the name: ');
                var number = prompt('enter the number of share: ');
                var price = prompt('enter the price: ');
                stocks.users.push({
                    "name": name,
                    "number_of_share": number,
                    "price": price
                })
                console.log(stocks);
                var num = parseInt(number * price);
                console.log("the total price of each stock is: " + num);
                sum = parseInt(sum + num);
                fs.writeFile('stock.json', JSON.stringify(stocks),function(err) {
                    if (err) throw err
                })
            }
            console.log("the total price of stock is: " + sum);
            break;
     //    case 2:
     //        var i = prompt('which stock u want to delete: ')
     //        delete stocks.users.name;
     //        console.log(stocks.users);
     //        fs.writeFile('/home/admin1/Documents/BridgeLabzz/oops/prog4.json', JSON.stringify(stocks), function (err) {
     //            if (err) throw err

     //        })
     //        break;

    }
})


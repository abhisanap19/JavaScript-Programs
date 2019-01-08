var Utility = require('../oops/stockAccount.js');
var prompt = require('prompt-sync')();
var fs = require('fs');
var data = fs.readFileSync('stock5.json');
 stock1= JSON.parse(data); 
class Account
 {
     constructor(stock1,totalprice,amount,report)
     {
         this.stock1;
         this.totalprice =1;
         this.amount = 0;
         this.report = [];
     }

     buy()
     {
         var weight;
         var num = prompt("please enter total number of stocks purchased ");
         for( var i=0; i< num; i++)
         {
             var Name = prompt("please enter item purchased ");
             var Number = prompt("please enter the number of items purchased ");
             var price = prompt("please enter price per item");
             stock1.stock.push (
                 {
                    stockname: Name,
                    shares: weight,
                    Price: price,

                 })
                 totalprice = parseInt(num) * parseInt(price);
             console.log("Total price of all stock is: "+JSON.stringify(totalprice));
             console.log(stock1);
             fs.writeFile('stock5.json', JSON.stringify(stock1), function(err) {
                 if(err) throw err
             })
            }
        }
        sell()
        {
            var del = prompt("please enter the index of item you want to purchase ");
            delete stock1.stock[del];
            for(var k=0; k<stock1.stock.length; k++)
            {
                if(stock1.stock[k] == null)
                {
                stock1.stock.splice(k,1);
                }
            }
            fs.writeFile(stock5.json, JSON.stringify(stock1), function(err)
            {
                if(err) throw err
            })
        }
        value()
        {
            for(var i=0; i<stock1.stock.length ; i++)
            {
                amount = Number(stock1.stock[i].price) + Number(amount);
            }
            console.log("Total price of stock is: "+amount);
        }
        
        accountreport()
        {
            console.log("a");
            for(var j=0; j<stock1.stock.length; j++)
            {
                report.push(stock1.stock[j]);
            }
            console.log("The report of your stock is "+JSON.stringify(report));
        }
    }
    var s = new Account();
    console.log("******Welcome to new account manager******");
    console.log("1: Buy stock");
    console.log("2: value of stock");
    console.log("3: sell");
    console.log("4: stock Report");
    console.log("5: Exit");

    var choice = prompt("please enter your choice ");
    var stock1,totalprice =1, amount = 0,report =[];
    switch(parseInt(choice))
    {
        case 1:
        s.buy();
        break;

        case 2:
        s.value;
        break;

        case 3:
        s.sell;
        break;

        case 4:
        s.accountreport();
        break;

        case 5:
        console.log("Exit!");

        default:
        console.log("Invalid input!");
        break;


    }


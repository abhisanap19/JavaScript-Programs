/*****************************************************************************************
 *purpose   :To create the JSON from Inventory Object and output the JSON String.     
 * @file    :stockAccount.js
 * @overview:To Extend the inventory program to Create InventoryManager to manage the Inventory.
 *           The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *           The InventoryManager will call each Inventory Object in its list to calculate the Inventory
 *           Price and then call the Inventory Object to return the JSON String.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 04/01/2019 
 ************************************************************************************/
var Utility = require('../oops/stockAccount.js');
var prompt = require('prompt-sync')();
var fs = require('fs');
var data = fs.readFileSync('stock5.json');
 stock1= JSON.parse(data); 
 var data1=fs.readFileSync('stockaccount.json');
 account=JSON.parse(data1);
 nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
class Account
 {
     constructor(stock1,totalprice,amount,report)
     {
         this.stock1;
         this.totalprice =1;
         this.amount = 0;
         this.report = [];
     }

     createAccount(){
        var name = prompt("Please enter customer Name: ");
        if (nameRestriction.test(name) == false) {
            console.log("Invalid name!");
            return false;
        }
        var ID = prompt("Please enter customer ID: ");
        if (contactRestriction.test(ID) == false) {
            console.log("Invalid ID!");
            return false;
        }
        var amount=prompt("Amount: ")
        if (contactRestriction.test(amount) == false) {
            console.log("Invalid amount!!");
            return false;
        }
        account.Person.push({
            "Name": name,
            "ID": ID,
            "amount":amount
        })
        //write file into json 
        fs.writeFile('stockaccount.json', JSON.stringify(account), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        })


     }
     openAccount(){
        if (account.Person.length > 0) {
            for (var i = 0; i < account.Person.length; i++) {
                console.log(account.Person[i]);
            }
            console.log("Welcome!!");
            var update = prompt("Please enter the name of profile: ");

     }
    }
     buy()
     {
         var weight;
         var num = prompt("please enter number of stocks: ");
         for( var i=0; i< num; i++)
         {
             var Name = prompt("please enter name: ");
             var number = prompt("please enter the number of shares:  ");
             var price = prompt("please enter price: ");
             stock1.stock.push (
                 {
                    stockname: Name,
                    Number_of_shares:number,
                    Price: price,

                 })
                 totalprice = parseInt(number) * parseInt(price);
             console.log("Total price of all stock is: "+JSON.stringify(totalprice));
             console.log(stock1);
             fs.writeFile('stock5.json', JSON.stringify(stock1), function(err) {
                 if(err) throw err
             })
            }
        }
        sell()
        {
            var del = prompt("please enter the index of item you want to purchase: ");
            delete stock1.stock[del];
            for(var k=0; k<stock1.stock.length; k++)
            {
                if(stock1.stock[k] == null)
                {
                stock1.stock.splice(k,1);
                }
            }
            fs.writeFile('stock5.json', JSON.stringify(stock1), function(err)
            {
                if(err) throw err
            })
        }
        value()
        {
            for(var i=0; i<account.Person.length ; i++)
            {
                amount = Number(account.Person[i].price) + Number(amount);
            }
            console.log("Total amount: "+amount);

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
    console.log("*Welcome to stock account manager*");
    console.log("1.Create Account");
    console.log("2.Open account")
    console.log("3:Exit");

    var choice = prompt("please enter your choice ");
    var stock1,totalprice =1, amount = 0,report =[];
    switch(parseInt(choice))
    {
        case 1:
           s.createAccount();
           break;
        case 2:
            s.openAccount();
            console.log("What u want to do?");
            console.log("1:Buy stock");
            console.log("2:value of account");
            console.log("3:sell");
            console.log("4: Stock report");
            console.log("5: Exit");
            var choice2 = prompt("Please enter your choice: ");
            switch (parseInt(choice2)) {
                case 1:
                s.buy();
                break;
                case 2:
                s.value();
                 break;
                case 3:
                s.sell();
                 break;
                 case 4:
                 s.accountreport();
                 break;
            }
            break;

        case 3:
        console.log("Exit!");
        break;

        default:
        console.log("Invalid input!");
    }


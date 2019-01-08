/*****************************************************************************************
 *purpose   :To create the JSON from Inventory Object and output the JSON String.     
 * @file    :inventoryDM4.js
 * @overview:To Extend the inventory program to Create InventoryManager to manage the Inventory.
 *           The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *           The InventoryManager will call each Inventory Object in its list to calculate the Inventory
 *           Price and then call the Inventory Object to return the JSON String.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 04/01/2019 
 ************************************************************************************/




var fs = require('fs')
var prompt = require('prompt-sync')();

fs.readFile('inventoryManager.json', function (err, data) {

    if (err) throw err
    var inventory = JSON.parse(data);
    console.log("******Inventory Manager*******")
    console.log("1.Add\n2.Delete\n3.Purchase");
    var option = prompt('enter the option: ');
    switch (parseInt(option)) {
        case 1:
              console.log("What do u want to add?")
             console.log("1.rice\n2.pulses\n3.wheat");
             var option1=prompt('Enter option: ');
             if(option1==1){
            var inventory1= prompt('how many variety of rice u want to add: ');
            for (var i = 1; i <= inventory1; i++) {
                var name = prompt('enter the name: ');
                var weight= prompt('enter weight: ');
                var price= prompt('enter the price: ');
                inventory.rice.push({
                    "name": name,
                    "weight": weight,
                    "price": price
                })
                console.log(inventory);
                var num = parseInt(weight * price);
                console.log("the total price will be " + num+"Rs");
                //sum = parseInt(sum + num);
                fs.writeFile('inventoryManager.json', JSON.stringify(inventory),function(err) {
                    if (err) throw err
                })
            }
        }
        else if(option1==2)
        {
            var inventory2= prompt('how many variety of pulses u want to add: ');
            for (var i = 1; i <= inventory2; i++) {
                var name = prompt('enter the name: ');
                var weight= prompt('enter weight: ');
                var price= prompt('enter the price: ');
                inventory.pulses.push({
                    "name": name,
                    "weight": weight,
                    "price": price
                })
                console.log(inventory);
                var num = parseInt(weight * price);
                console.log("the total price will be " + num+"Rs");
                //sum = parseInt(sum + num);
                fs.writeFile('inventoryManager.json', JSON.stringify(inventory),function(err) {
                    if (err) throw err
                })
            }
        }
        else if(option1==3)
        {
            var inventory3= prompt('how many variety of wheats u want to add: ');
            for (var i = 1; i <= inventory3; i++) {
                var name = prompt('enter the name: ');
                var weight= prompt('enter weight: ');
                var price= prompt('enter the price: ');
                inventory.wheat.push({
                    "name": name,
                    "weight": weight,
                    "price": price
                })
                console.log(inventory);
                var num = parseInt(weight * price);
                console.log("the total price will be " + num+"Rs");
                //sum = parseInt(sum + num);
                fs.writeFile('inventoryManager.json', JSON.stringify(inventory),function(err) {
                    if (err) throw err
                })
            }
        }
            break;

        case 2:
              console.log("What do u want to delete?")
              console.log("1.rice\n2.pulses\n3.wheat");
              var option2=prompt('Enter option: ');  
              if(option2==1){  
              var i = prompt('which index u want to delete : ')
              delete inventory.rice[i];
              console.log(inventory.rice);
              fs.writeFile('inventoryManager.json', JSON.stringify(inventory), function (err) {
                if (err) throw err
            })
           }

              else if(option2==2){  
              var i = prompt('which index u want to delete : ')
              delete inventory.pulses[i];
              console.log(inventory.pulses);
              fs.writeFile('inventoryManager.json', JSON.stringify(inventory), function (err) {
              if (err) throw err
          })
          }

              if(option2==3){  
              var i = prompt('which index u want to delete : ')
              delete inventory.wheat[i];
              console.log(inventory.wheat);
              fs.writeFile('inventoryManager.json', JSON.stringify(inventory), function (err) {
              if (err) throw err
           })
           }
            break;

        case 3:
              console.log("What do u want to purchase?");
              console.log("1.rice\n2.pulses\n3.wheat");
              var option3=prompt('Enter option: ');
              if(option3==1){
                var Weight=prompt("How much rice do u want in kg: ");
                for(var i=0;i<inventory.rice.length;i++)
                 console.log("U will pay "+Weight*inventory.rice[i].price+" Rs to buy "+Weight+"kg "+ inventory.rice[i].name);  
              }
        
              else if(option3==2){       
              var Weight=prompt("How much pulses do u want in kg: ");
              for(var i=0;i<inventory.pulses.length;i++)
              console.log("U will pay "+Weight*inventory.pulses[i].price+"Rs to buy "+Weight+"kg "+ inventory.pulses[i].name);
              }
              
              else if(option3==3){
              var Weight=prompt("How much pulses do u want in kg: ");
              for(var i=0;i<inventory.wheat.length;i++)
              console.log("U will pay "+Weight*inventory.whea[i].price+" Rs to buy "+Weight+"kg "+ inventory.wheat[i].name);
              }
              break;
    }
           
})


var fs = require('fs')
var prompt = require('prompt-sync')();

fs.readFile('inventoryManager.json', function (err, data) {

    if (err) throw err
    //var sum=0;
    var inventory = JSON.parse(data)
    console.log("******Inventory Manager*******")
    console.log("1.Add\n2.Delete");
   // console.log("enter 2 to delete");
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
      }
})


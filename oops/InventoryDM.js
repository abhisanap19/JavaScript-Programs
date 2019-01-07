
var fs = require('fs');
var prompt = require('prompt-sync')();
let rawdata = fs.readFileSync('Inventory.json');  
let Inventory = JSON.parse(rawdata);
//console.log(Inventory);
do{
console.log("1.Rice\n2.Pulses\n3.Wheat\n4.I want to Exit");
 var option = prompt('What do you want: ');
 option=Number(option);
 if(option>0 && option<5){
 switch(parseInt(option)){
     case 1:
        var Weight=prompt("How much rice do u want in kg: ");
        for(var i=0;i<Inventory.rice.length;i++)
         console.log("U will pay "+Weight*Inventory.rice[i].price+" Rs to buy "+Weight+"kg "+ Inventory.rice[i].name);  
         break;

     case 2:
        var Weight=prompt("How much pulses do u want in kg: ");
        for(var i=0;i<Inventory.pulses.length;i++)
         console.log("U will pay "+Weight*Inventory.pulses[i].price+"Rs to buy "+Weight+"kg "+ Inventory.pulses[i].name);
         break;

     case 3:
        var Weight=prompt("How much pulses do u want in kg: ");
        for(var i=0;i<Inventory.wheats.length;i++)
         console.log("U will pay "+Weight*Inventory.wheats[i].price+" Rs to buy "+Weight+"kg "+ Inventory.wheats[i].name);
         break;

     case 4:
          process.exit()
         break;
 }
}else{
    console.log("plz enter valid choice");
}
 }while(option!=4)

 
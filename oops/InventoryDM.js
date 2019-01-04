
// 'use Strict';


// fs=require('fs');
// let data=fs.readFileSync('Inventory.json');
// let Inventory=JSON.parse(data);
// var n1,n2;
// var length;
// console.log(Inventory);
// for(var i=0,j=0;i<Inventory.rice.weight.length,j<Inventory.rice.price.length;i++,j++){
//          n1=Inventory.rice.weight[i];
//          n2=Inventory.rice.price[j];
//          console.log("The total price of"+Inventory.rice.name[i]+"is: "+n1*n2);
//     }

// for(var i=0,j=0;i<Inventory.pulses.weight.length,j<Inventory.pulses.price.length;i++,j++){
//         n1=Inventory.pulses.weight[i];
//         n2=Inventory.pulses.price[j];
//         console.log("The total price of"+Inventory.pulses.name[i]+"is: "+n1*n2);
//     }
// for(var i=0,j=0;i<Inventory.wheats.weight.length,j<Inventory.wheats.price.length;i++){
//         n1=Inventory.wheats.weight[i];
//         n2=Inventory.pulses.price[j];
//         console.log("The total price of"+Inventory.pulses.name[i]+"is: "+n1*n2);
//     }

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('Inventory.json');  
let Inventory = JSON.parse(rawdata);
console.log(Inventory);
var num1,num2;

for(var i=0;i<Inventory.rice.length;i++)
{
    console.log("The total price of "+ Inventory.rice[i].name+" is: "+Inventory.rice[i].weight*Inventory.rice[i].price+"Rs");
}
for(var i=0;i<Inventory.rice.length;i++)
{
    console.log("The total price of "+ Inventory.pulses[i].name+" is: "+Inventory.pulses[i].weight*Inventory.pulses[i].price+"Rs");
}
for(var i=0;i<Inventory.rice.length;i++)
{
    console.log("The total price of "+ Inventory.wheats[i].name+" is: "+Inventory.wheats[i].weight*Inventory.wheats[i].price+"Rs");
}
 
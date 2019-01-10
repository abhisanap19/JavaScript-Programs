/*****************************************************************************************
 *purpose   : To create the JSON from Inventory Object and output the JSON String       
 * @file    : InventoryDM.js
 * @overview: Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 *            name, weight, price per kg.Then read Json file and calculate value of each inventory.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 03/01/2019 
 ************************************************************************************/

var fs = require('fs');
var prompt = require('prompt-sync')();
var utility=require('../oops/InventoryDM');
/**
 * To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 * name, weight, price per kg.Then read Json file and calculate value of each inventory.
 * @param weight @param price, provided for each inventory with name and calculate total price
 */
function inventory(){
//readfile from json 
let rawdata = fs.readFileSync('Inventory.json');
//parse using JSON
let Inventory = JSON.parse(rawdata);
//name and contact restriction
a = /[a-z]/g;
b = /[0-9]/g;
do {
    console.log("1.Rice\n2.Pulses\n3.Wheat\n4.I want to Exit");
    var option = prompt('What do you want: ');
        //switch case
        switch (parseInt(option)) {
            case 1:
                var Weight = prompt("How much rice do u want in kg: ");
                //validating weight which should not be in characters.
                if (b.test(Weight) == false) {
                    console.log("Plz enter valid number!!");
                    //return false if name restriction occurs
                    return false;
                }
                for (var i = 0; i < Inventory.rice.length; i++)
                //calculating and printing price u will pay for given weight in kg
                    console.log("U will pay " + Weight * Inventory.rice[i].price + " Rs to buy " + Weight + "kg " + Inventory.rice[i].name);
                break;

            case 2:
                var Weight = prompt("How much pulses do u want in kg: ");
                //validation
                if (b.test(Weight) == false) {
                    console.log("Plz enter valid number!!");
                    return false;
                }
                //length of pulses must be greater than i 
                for (var i = 0; i < Inventory.pulses.length; i++)
                    console.log("U will pay " + Weight * Inventory.pulses[i].price + "Rs to buy " + Weight + "kg " + Inventory.pulses[i].name);
                break;
            case 3:
                var Weight = prompt("How much pulses do u want in kg: ");
                //validation
                if (b.test(Weight) == false) {
                    console.log("Plz enter valid number!!");
                    return false;
                }
                for (var i = 0; i < Inventory.wheats.length; i++)
                //calculating weight and price and printing result
                    console.log("U will pay " + Weight * Inventory.wheats[i].price + " Rs to buy " + Weight + "kg " + Inventory.wheats[i].name);
                break;

            case 4:
                console.log("Exit");
                break;
                //use default condition if each case fails
                default:
                console.log("plz enter valid choice!!!")
        }
     
} while (option != 4)

}inventory();
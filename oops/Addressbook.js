/*****************************************************************************************
 *purpose   : To create a proper address book to store new address informations    
 * @file    : Addressbook.js
 * @overview: Add new entries each time and manage that address book and perform opeartions
 *            like add,delete,search,update and sort information.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 07/01/2019 
 ************************************************************************************/ 
var prompt = require('prompt-sync')();
var fs = require('fs');
var data = fs.readFileSync('Addressbook.json');
var addressb = JSON.parse(data);
//regex
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;

/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    //create a constructor to initialize and store values
    constructor(addressb) {
        this.addressb;
    }
    createAddress() {
        var name = prompt("Please enter your first name: ");
        if (nameRestriction.test(name) == false) {
            console.log("Invalid name!");
            return false;
        }
        var lastName = prompt("Please enter your last name: ");
        //validating last name
        if (nameRestriction.test(lastName) == false) {
            console.log("Invalid name!");
            return false;
        }
        //add the address information 
        console.log("*Address Info*");
        var street = prompt("Street: ");
        var city = prompt("City: ");
        if (nameRestriction.test(city) == false) {
            console.log("Invalid city name!");
            return false;
        }
        var state = prompt("State: ");
        if (nameRestriction.test(state) == false) {
            console.log("Invalid state name!");
            return false;
        }
        var nation = prompt("Nationality: ");
        if (nameRestriction.test(nation) == false) {
            console.log("Invalid Nationality!");
            return false;
        }
        var zip = prompt("Zip code: ");
        //zip code validation that should not exceed length 6
        // if (contactRestriction.test(zip) == false || zip.lenght != 6) {
        //     console.log("Invalid zip code!");
        //     return false;
        // }

        var phoneNum = prompt("Phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            console.log("Invalid phone number!");
            return false;
        }
        //push each value into json 
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nation": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        //write file into json 
        fs.writeFile('Addressbook.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        })

        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    //comaparing name of each object and sort alphabetically
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting() {
        console.log(addressb.Person.sort(this.compare1));
    }
    //open profile for given name
    openProfile() {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = prompt("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What u want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = prompt("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                        //update profile
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = prompt("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = prompt("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    //update whole data after changes
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nation": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    //save into json every time after update
                                    save();

                                    break;

                                case 2:
                                    var cUpdate = prompt("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nation": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = prompt("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nation": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = prompt("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nation": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = prompt("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nation": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 6:
                                    var pUpdate = prompt("Enter the new phone number: ");
                                    if (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nation": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("Exit!");
                                    address();
                                    break;
                            }
                            break;
                        case 2:
                            var update = prompt("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            //write file
                            fs.writeFile('Addressbook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                           this.sorting();
                            save();
                            break;
                        case 4:
                        //save file into json 
                            function save() {
                                fs.writeFile('Addressbook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("Exit");
                            address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
                //check if name is available in json or not
                console.log("Profile unavailable!!Please create one.");
                address();
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}
//creating a function to perform main opeartions such as create,open profile 
function address() {
    var a = new Address();
    console.log("***ADDRESS BOOK***");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
    var choice1 = prompt("Please enter your choice: ");
    switch (parseInt(choice1)) {
        case 1:
            a.createAddress();
            break;
        case 2:
            a.openProfile();
            break;
        case 3:
            console.log("Exit!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
address();
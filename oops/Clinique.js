/*****************************************************************************************
 *purpose   : To print doctor patient report within the clinique managment system.    
 * @file    : Clinique.js
 * @overview: To manage patient and doctor list then allow patient to take appointment from doctor 
 *            also maintain patient doctor report. 
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 07/01/2019 
 ************************************************************************************/ 
var prompt=require('prompt-sync')();
//var utility=require('../oops/Clinique');
var fs=require('fs');

fs.readFile('clinique.json', function (err, data) {
    if (err) throw err
    var clinique = JSON.parse(data);
    do{ 
    console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
    var option=prompt('Enter the option:');
    switch(parseInt(option)){
         case 1:
                    console.log("*Doctors Available*");
                    console.log(clinique.Doctors);      
                       var Name=prompt('Patient Name: ');
                       var ID=parseInt(Math.random()*1000);
                       var mobNo=prompt('Mobile Number: ');
                       var Age=prompt('Age: ');
                       var Appointed_To=prompt('whose appointment u want: ');
                        clinique.Patients.push(
                            {
                                "Name":Name,
                                "ID":ID,
                                "mobNo":mobNo,
                                "Age":Age,
                                "Appointed_To":Appointed_To
                            })
                        console.log("Appointment Added Successfully...");


                        fs.writeFile('clinique.json', JSON.stringify(clinique),function(err) {
                            if (err) throw err
                            })
                         break;
        case 2:
                console.log(clinique); 
                         break;
         case 3:
                 console.log("****SEARCH LIST******");
                     console.log("1.Doctor\n2.Patient");
                     var option2=prompt('Enter Option: ');
                      if(option2==1){ 
                          console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability"); 
                          var option3=prompt('Enter option: ');
                        if(option3==1){
                        var i = prompt('Name: ');
                        for(var key in clinique.Doctors){
                            if(clinique.Doctors[key].Name==i){
                                console.log("****Doctor Info****");
                                console.log(clinique.Doctors[key]);
                            }
                            }
                        }
                        else if(option3==2){
                        var i = prompt('ID: ');
                        for(var key in clinique.Doctors){
                            if(clinique.Doctors[key].ID==i){
                                console.log("****Doctor's Info****");
                                console.log(clinique.Doctors[key]);
                            }
                            }
                        }
                        else if(option3==3){
                        var i = prompt('Specialization: ');
                        for(var key in clinique.Doctors){
                            if(clinique.Doctors[key].Specialization==i){
                                console.log("****Doctor's Info****");
                                console.log(clinique.Doctors[key]);
                            }
                            }
                        }
                        else if(option3==4){
                        var i = prompt('Availability: ');
                        for(var key in clinique.Doctors){
                            if(clinique.Doctors[key].Availability==i){
                                console.log("****Doctor's Info****");
                                console.log(clinique.Doctors[key]);
                            }
                            }
                        }
                    }

                    if(option2==2){ 
                    console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age"); 
                    var option4=prompt('Enter option: ');
                      if(option4==1){
                      var i = prompt('Name: ');
                      for(var key in clinique.Patients){
                          if(clinique.Patients[key].Name==i){
                              console.log("****Patients Info****");
                              console.log(clinique.Patients[key]);
                          }
                          }
                      }
                      else if(option4==2){
                      var i = prompt('ID: ');
                      for(var key in clinique.Patients){
                          if(clinique.Patients[key].ID==i){
                              console.log("****Patients Info****");
                              console.log(clinique.Patients[key]);
                          }
                          }
                      }
                      else if(option4==3){
                      var i = prompt('mobNo: ');
                      for(var key in clinique.Patients){
                          if(clinique.Patients[key].mobNo==i){
                              console.log("****Patients Info****");
                              console.log(clinique.Patients[key]);
                          }
                          }
                      }
                      else if(option4==4){
                      var i = prompt('Age: ');
                      for(var key in clinique.Patients){
                          if(clinique.Patients[key].Age==i){
                              console.log("****Patients Info****");
                              console.log(clinique.Patients[key]);
                          }
                          }
                        }
                  }
            break;
            case 4:
                   // process.exit();
            break;
    }
    }while(option!=4);
})
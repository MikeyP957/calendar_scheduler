$(document).ready(function() {
  //Global Variables
    
      var dailyEvents = { //an object to store daily events
        workingHours:["9 AM", "10 AM", "11 AM","Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
      
      }; 

    //Get html
      var timeBlocksContainer = $("#timeBlocksContainer");
      var workingHours = $(".workingHour");
      var confirmUpdate = $(".confirm");
      var appointments = $(".appointments");

  //Functions
      
      function confirmButton(){
          //make a button
          var confirmButton = $("<button>");
          confirmButton.addClass("saveBtn");
          confirmButton.text("Confirm Appointment")

          $(".confirm").append(confirmButton);
      }
        
  //Call funtions
    confirmButton();
  //Event Handlers


  });
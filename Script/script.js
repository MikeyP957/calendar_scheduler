$(document).ready(function() {
    //Global Variables
    
      var dailyEvents = { //an object to store daily events
        workingHours:["9 AM", "10 AM", "11 AM","Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
      
      }; 

     //Get html
      var timeBlocksContainer = $("#timeBlocksContainer");

    //Functions
      
        for (i = 0; i < 9; i++){ //creates elements for each hour
         var hourlySchedule = ("<div>" + dailyEvents.workingHours[i] +"<div>");
            timeBlocksContainer.append(hourlySchedule);
        }

    //Call funtions

    //Event Handlers


  });
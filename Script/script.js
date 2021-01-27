$(document).ready(function() {
  //Global Variables
    
      var dailyEvents = { //an object to store daily events
        workingHours:["9 AM", "10 AM", "11 AM","Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
      
      }; 

    //Get html
      var timeBlocksContainer = $("#timeBlocksContainer");
      var workingHours = $(".workingHour");
      var confirm = $(".confirm")
      var apptByValue = $(".appointments")

    //tester variables
    var valueOf9 = "9";
    var valueOf10 = "10";  
  //Functions
      
 
    
       // When a .btn is clicked...
       $(".btn").on("click", function(){
        var appendAppt = $("<div>");
        var correspondingElm = "9AM";
        var correspondingForm = "Testing Lol";
        //add class
        
        //add content(user input from form)
        appendAppt.text(correspondingForm)
        //choose location w/ variable (it changes by button)
        $(".9AM-appointments").append(appendAppt)
        //append
        console.log("button click")
      
      });


      // function that takes in user input and 
      function appointmentRender(){
        


      }
        
  //Call funtions
 
    
  //Event Handlers


  })
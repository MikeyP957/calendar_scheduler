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

  
  //Functions
      
     
       // When a .btn is clicked this function takes in the ID from that button
       //That ID matches the syntax for my form and final location to append
       $(".btn").on("click", function(){
        console.log(this.id, "this id")

        var appendAppt = $("<div>");
        //I retrieve the ID from which button was clicked
        var correspondingElm = this.id;
        //concatinate the button ID to match the cooresponding form ID
        var correspondingForm = $("#write-" + correspondingElm).val().trim();
                
        //add text from the form to the div that appends
        appendAppt.text(correspondingForm)
        //concatinate the Id name to make it a class, 
        //where the div will append, i.e. ".9AM-appointment, .10AM-appointment"
        $("." + correspondingElm).append(appendAppt)
        //append
        console.log("button click")
        console.log(correspondingForm, "-text from form")
      
      });


    
  //Call funtions
 
    
  //Event Handlers


  })
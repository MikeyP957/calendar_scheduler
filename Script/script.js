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
      
 //give my button an ID
 //I retrieve that ID and it matches a class in my form and my div
 //when I run function the ID is pasted to this function so everything matches
    
       // When a .btn is clicked...
       $(".btn").on("click", function(){
        console.log(this.id, "this id")
        var appendAppt = $("<div>");
        var correspondingElm = this.id;
        var correspondingForm = $("#write-" + correspondingElm).val().trim();
                
        //add content(user input from form)
        appendAppt.text(correspondingForm)
        //choose location w/ variable (it changes by button)
        $("." + correspondingElm).append(appendAppt)
        //append
        console.log("button click")
        
      
      });


    
  //Call funtions
 
    
  //Event Handlers


  })
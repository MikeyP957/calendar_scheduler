$(document).ready(function() {
  //Global Variables
    
      var dailyEvents = { //an object to store daily events
        workingHours:["9 AM", "10 AM", "11 AM","Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
      
      }; 

    //Get html
      var timeBlocksContainer = $("#timeBlocksContainer");
      var workingHours = $(".workingHour");
      var confirmByValue = $(".confirm")
      var apptByValue = $(".appointments")

    //tester variables
    var valueOf9 = "9";
    var valueOf10 = "10";  
  //Functions
      
 
    
       // When a .saveBtn is clicked...
       $(".saveBtn").on("click", function(){
        // if the text exists then append to this div as a list
        if($(".text").val().length != 0 ){
          var thisValue = $(this.saveBtn.val());
          var corrspondingText = "candy"
          $(".appointments").val(thisValue).append(corrspondingText)
        }
        else return;
      });


      // function that takes in user input and 

        
  //Call funtions
    confirmButton();
    
  //Event Handlers


  })
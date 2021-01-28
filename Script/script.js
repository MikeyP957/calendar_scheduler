$(document).ready(function() {
  //Global Variables
    //time(hour) from moment api
      var dailyHour = moment().hour();
      console.log(dailyHour)
      
    //array to store local storage
      var appointmentsLS = [];
      var workingHourLS = [];

    
    //find formula for regular hours put in forloop to add to page
  //Functions
    //places current day in html
      $("#currentDay").text(moment().format("dddd,MMMM Do"));
    //when open button is clicked the schedule appears 
      $("#open").on("click",function(){
        $("#timeBlocksContainer").css("display", "block")
      });
    // When a .btn is clicked this function takes in the ID from that button
    //That ID matches the syntax for my form and final location to append
      $(".btn").on("click", function(){
        console.log(this.id, "this id")

          var appendAppt = $("<div class= 'appt'>");
        //I retrieve the ID from which button was clicked
          var correspondingElm = this.id;
        //concatinate the button ID to match the cooresponding form ID
          var correspondingForm = $("#write-" + correspondingElm).val().trim();
        //create button that will clear task from list
          var clearBtn = $("<button>")        
        //add text from the form to the div that appends
          appendAppt.text(correspondingForm)
        //add class to button
          clearBtn.addClass("deleteTask")
          clearBtn.text("clear")
        //concatinate the Id name to make it a class, 
        //where the div will append, i.e. ".9AM-appointment, .10AM-appointment"        
          $("." + correspondingElm).append(appendAppt)
        //add the text from the form to appointmentsLS array
          appointmentsLS.push(correspondingForm)
          workingHourLS.push(correspondingElm)
        //set item in local storage and add the array as a string  
          localStorage.setItem("appointments", JSON.stringify(appointmentsLS))
          localStorage.setItem("appointmentTime",JSON.stringify(workingHourLS))
      });

    //this function changes the color of the container
    //depending on the hour
      $(document).ready(function(){
        var idArray = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];
        for (i = 0; i < idArray.length; i++){
          if(i < dailyHour - 9){
            idArray[i].addClass("past")
          }
          else if (i == dailyHour - 9){
            idArray[i].addClass("present")
          }
          else idArray[i].addClass("future")
        }
      });
      

        
  //This function initiates local storage
    $(document).ready(function(){
        //If the local storage is not empty
        if (localStorage.getItem("appointments") !== null){
          //get the local storage (string) 
            var storageTxt = localStorage.getItem("appointments");
            var storageTime = localStorage.getItem("appointmentTime");
          //change the strings back to arrays 
           var appTXT = JSON.parse(storageTxt)
           var appTime = JSON.parse(storageTime)

          console.log(appTXT, "local storage text")
          console.log(appTime, "local storage times")
          //append each text to the corresponding location
            for(i = 0; i < appTXT.length; i++){
              var newDiv = $("<div class='appt' >")
              newDiv.text(appTXT[i])
              $("." + appTime[i]).append(newDiv)
            }
        }
        //otherwise return;
        else return;
      });  

})
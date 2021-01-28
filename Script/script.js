$(document).ready(function() {
  //Global Variables
  
    //array to store local storage
   var appointmentsLS = [];
   var workingHourLS = [];

    $("#currentDay").text(moment().format("dddd,MMMM Do"));
    //find formula for regular hours put in forloop to add to page
  //Functions
      
     $("#open").on("click",function(){
      $("#timeBlocksContainer").css("display", "block")
        }
     );
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
        //add the text from the form to appointmentsLS array
        appointmentsLS.push(correspondingForm)
        workingHourLS.push(correspondingElm)
        localStorage.setItem("appointments", JSON.stringify(appointmentsLS))
        localStorage.setItem("appointmentTime",JSON.stringify(workingHourLS))
      });

      //onclick function push an object onto the appointmesntsLs
        //2 arrays 
          //location: copied from onlick function
          //text: coped from onlick function 
    
        //forloop to grab each array (each index coresponds) 
        //use array workingHoursLS to set location
        // use local storage "appointments" for text
        //use local storage "appointmentTime" for location

        function init(){
          var storageTxt = localStorage.getItem("appointments");
          var storageTime = localStorage.getItem("appointmentTime");
           var appTXT = JSON.parse(storageTxt)
           var appTime = JSON.parse(storageTime)

          console.log(appTXT, "local storage text")
          console.log(appTime, "local storage times")
          if (appTXT.length !== null){
            for(i = 0; i < appTXT.length; i++){
              $("." + appTime[i]).append(appTXT[i])
            }
          }
          
        }
        init();





        //forloop start at 9 go to 17(5pm)
        //$().addClass([i] + "-appointment")
        //output--> 9-appointment, 10 ,11, 12..





      // for(var i = 0; i <appointmentsLS.length; i++){

      //   var storedAppts = localStorage.getItem("appointments")
      //   console.log(storedAppts, "for loop")

      //   if (storedAppts !== null) {
      //     appointmentsLS[i] = storedAppts;
      //   }
      // }
      
   
     
    
  //Call funtions

    
  //Event Handlers


  })
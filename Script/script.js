$(document).ready(function() {
  //Global Variables
  
    //array to store local storage
   appointmentsLS = [],
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
    //find formula for regular hours put in forloop to add to page
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
        //add the text from the form to appointmentsLS array
        appointmentsLS.push(correspondingForm)
        localStorage.setItem("appointments", JSON.stringify(appointmentsLS))
        localStorage.getItem("appointments")
      });

      //onclick function push an object onto the appointmesntsLs
        //object{ 
          //location: copied from onlick function
          //text: coped from onlick function 
        // }
        //[{},{},{}]
        //forloop to grab each object 
        //get index i, then append to object.location, append text from object.text

        // forloop 

        //forloop start at 9 go to 18
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
$(document).ready(function() {
  //Global Variables
    //array to store local storage
   appointmentsLS = [],
  
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
      });

      // function storeAppointments() {
      //   localStorage.setItem("appointments" JSON.stringify(appointmentsLS))
      // };

      // function init() {
      //   var storedAppts = JSON.parse(localStorage.getItem("appointments"))

      //   if (storedAppts !== null) {
      //     appointmentsLS = storedAppts;
      //   }

      // }
    
  //Call funtions
 
    
  //Event Handlers


  })
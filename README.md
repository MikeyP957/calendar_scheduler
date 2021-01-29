# calendar_scheduler
This is an interactive scheduler that can update user input, adapt in real time and store information for later.

## Overview
The purpose of this application is to help users manage their time effectively by storing appointments in an easy and organized manner.

The inital display shows the current date buttons to open the planner and clear the contents of the planner.
![FrontPage](/Assets/intialButtons.png)
When the user scrolls down the page time blocks can be seen and are given different colors. Each color represents the past, present and future time block in relation to the current time.

To schedule an appointment for a time block the user must type into the appropriate form and click the corresponding button. This will add the text to the hour block container. 

At the moment, the application will only allow one appointment to be stored at a time. This can easily be modified in the code to allow more appointments to be stored if necessary.

If a user attempts to store nothing, i.e. the form is blank but the corresponding button is clicked, then the user is given an alert to add text before clicking the button.

If the user wants to clear the schedule, the button at the bottom of the page can be clicked. This button clears all stored appointments and reloads the page.

# Technology
This application uses the Moment API to access the current date and the local time. This API also allows the scheduler to change the color of the hour block to indicate the present, past and future hours. Jquery was also used to create the functionality for each button and the use of local storage. Bootstrap CDN is used to build the structure of the html and style the page. Additional styling of the page is done with CSS.

# Deployment
The calander scheduler application is ready to use and loads with no errors. There are a few modifications that could be added to improve usability, such as adding a click event to strike out unwanted appointments specifically, or smaller time blocks to represent half hours. As always, the display could be modified to user preference and would be relatively simple to do in the CSS file.

# URL
https://mikeyp957.github.io/calendar_scheduler/
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// Variables at top, then functions, then event listenter at bottom

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


//                      MY PSEUDO-CODE-
// if using JQUERY stick only with JQUESRY
// create event listener that will save the text to local storage.
//use the ids on different elements we can save elements by id, target the value (by id),
// use css class where time is. Create varaiable to Day.js library to save that info

// var currentHour= (day.js)****
// .on('click')

// Step 1: Create all you VAR's and pull them from html 
// var 1- for time at top



//2. create a section for you functions

// add funtion to handle the save button and save stuff to page
// add function that populates the content and color of different elements on the page
// add function that will consitantly update the page ( method-setInterval) 
// if time = current then red ...??? if, else if, else if
// set text content based on what is stored in local storage


// 3. Add event listeners and a function to start the program/load the info on the calendar

// add listener   on.('click', saveFunction)
// no need to call the start funtion 


//         My PSeudo-Code
// 
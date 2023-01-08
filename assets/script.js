//TO-DO
//3. re-look through comments to figure out way forward on updating past present and future
  //a. before any comparison create line of code to automatically change class ie color of line
  //b. compare day variable with id of the timeblock div
  //c. render correct color for each block with a for loop or a each loop
//4. save the text to local storage
//5. call the text from local storage when refreshing



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var hrEl = $('#hour-12');

$(function () {
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
    hrEl.attr('class', 'row time-block past');
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(today.format('dddd, MMMM D')+"th");
  });

  $();
  
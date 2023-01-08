//TO-DO
//3. re-look through comments to figure out way forward on updating past present and future
  //b. compare currentHour variable with id of the timeblock div
  //-if its before 24 but after 17 everything will be in the past
  //-if its after 0 but before 9 everything will be in the future
  //-if its between hours of 9 and 17, find hour set it to present, everything before the hour is past everything after is future
  //c. render correct color for each block with a for loop or a each loop
//4. save the text to local storage
//5. call the text from local storage when refreshing



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  var currentHour = today.format('H');
  console.log(currentHour<9 && currentHour>0);
  console.log(parseInt(currentHour)===15);
  var hrEl9 = $('#hour-9');
  var hrEl10 = $('#hour-10');
  var hrEl11 = $('#hour-11');  
  var hrEl12 = $('#hour-12');
  var hrEl13 = $('#hour-13');
  var hrEl14 = $('#hour-14');
  var hrEl15 = $('#hour-15');
  var hrEl16 = $('#hour-16');
  var hrEl17 = $('#hour-17');
  //var correctHourEl = $(`${}`);
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
    if(parseInt(currentHour)<9 && parseInt(currentHour)>=0){
      hrEl9.attr('class', 'row time-block future');
      hrEl10.attr('class', 'row time-block future');
      hrEl11.attr('class', 'row time-block future');
      hrEl12.attr('class', 'row time-block future');
      hrEl13.attr('class', 'row time-block future');
      hrEl14.attr('class', 'row time-block future');
      hrEl15.attr('class', 'row time-block future');
      hrEl16.attr('class', 'row time-block future');
      hrEl17.attr('class', 'row time-block future');
    }

    if(parseInt(currentHour)<24 && parseInt(currentHour)>17){
      hrEl9.attr('class', 'row time-block past');
      hrEl10.attr('class', 'row time-block past');
      hrEl11.attr('class', 'row time-block past');
      hrEl12.attr('class', 'row time-block past');
      hrEl13.attr('class', 'row time-block past');
      hrEl14.attr('class', 'row time-block past');
      hrEl15.attr('class', 'row time-block past');
      hrEl16.attr('class', 'row time-block past');
      hrEl17.attr('class', 'row time-block past');
    }
    //hrEl12.attr('class', 'row time-block future');
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(today.format('dddd, MMMM D')+"th");
  });

  $();
  
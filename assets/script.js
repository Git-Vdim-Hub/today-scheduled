//TO-DO
//4. save the text to local storage
//-traverse the DOM element and find the child with .text() X
//-figure out jQuery local storage options 
// add event listeners for the save buttons
//-if its an object, store it somewhere and save it to local storage from there x
//5. call the text from local storage when refreshing



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  var currentHour = today.format('H');
  var calendarArray = [];
  let tasksObject = {};
  //console.log(currentHour<9 && currentHour>0);
  //console.log(parseInt(currentHour)===15);
  var calendarElementsLength = $('#calendarContainer').children().length;
  // read in all calendar element values
  for(var i = 0; i<calendarElementsLength; i++){
    calendarArray[i]=$('#calendarContainer').children().eq(i);
  }
  console.log(calendarArray);

  //use to check for time equality during for-loop accessing the hour id
  console.log(($('#calendarContainer').children().eq(0).attr('id')).split("-")[1]);
  //use to access the length of the elements inside the calendarContainer div
  console.log($('#calendarContainer').children().length);
  //use to access the text of the textarea elements
  console.log($('#calendarContainer').children().eq(0).children().eq(1).text());
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
    tasksObject.nine = $('#calendarContainer').children().eq(0).children().eq(1).text();
    tasksObject.ten = $('#calendarContainer').children().eq(1).children().eq(1).text();
     
    console.log(tasksObject[0]);
    //localStorage.setItem = ('tasksObject', JSON.stringify(tasksObject));
    //localStorage.content = $('#calendarContainer').children().eq(1).children().eq(1).text();
    // get the text

// set the item in localStorage
localStorage.setItem('tasksObject', JSON.stringify(tasksObject));



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
      
    // ... how do we do this with a loop?
    // input all of the elements declared above into an array and at each one check for equality
    // ... how do we put them all into an array?
    // create an element array, forloop through it and add all html elements to each position of the array
    // USE DOM TRAVERSAL with jQuery
    //-if its after 0 but before 9 everything will be in the future 
    if(parseInt(currentHour)<9 && parseInt(currentHour)>=0){
      for(var i = 0; i<calendarElementsLength; i++){
        $('#calendarContainer').children().eq(i).attr('class', 'row time-block future');
      }
    }
    //-if its before 24 but after 17 everything will be in the past
    if(parseInt(currentHour)<24 && parseInt(currentHour)>17){
      for(var i = 0; i<calendarElementsLength; i++){
        $('#calendarContainer').children().eq(i).attr('class', 'row time-block past');
      }
    }
      //if its between hours of 9 and 17, find hour set it to present, everything before the hour is past everything after is future
      //if current hour is 9 set present for 9 and everything else future
      //if current hour is 10 set present for 10 set 9 for past and everything else future
    if(parseInt(currentHour)>8 && parseInt(currentHour)<=17){
      for(var i = 0; i<calendarElementsLength; i++){
        if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])<currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block past');
        } else if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])===currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block present');
        } else if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])>currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block future');
        }
      }

    }
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(today.format('dddd, MMMM D')+"th");
  });

  $();
  
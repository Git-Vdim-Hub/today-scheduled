// All code that interacts with the DOM is wrapped in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // Dayjs is used to get the current hour in 24-hour time.
  var today = dayjs();
  var currentHour = today.format('H');
  var calendarArray = [];
  var saveButton = $('button');
  var calendarElementsLength = $('#calendarContainer').children().length;
  
  // read in all calendar element values
  for(var i = 0; i<calendarElementsLength; i++){
    calendarArray[i]=$('#calendarContainer').children().eq(i);
  }
    // Listener for click events on the save button. This code 
    // uses the id in the containing time-block as a key to save the user input in
    // local storage using 'this'. DOM traversal is used to get the "hour-x" id of the
    // time-block containing the button that was clicked. The id is
    // used when saving the description in local storage.
    //localStorage.setItem = ('tasksObject', JSON.stringify(tasksObject));
  saveButton.on('click', function(){
    console.log($(this).parent().children().eq(1).text());
    localStorage.setItem(($(this).parent().attr('id')).split("-")[1], JSON.stringify($(this).parent().children().eq(1).val()));
    console.log(($(this).parent().attr('id')).split("-")[1]);
  })
    // Applies the past, present, or future class to each time
    // block by comparing the id to the current hour using the id
    // attribute of each time-block to conditionally add or remove the
    // past, present, and future classes. Day.js is used to get the
    // current hour in 24-hour time.
      
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
      //if its between hours of 9 and 17, find hour, set it to present, everything before the hour is past everything after is future
      //if current hour is 9 set present for 9 and everything else future
      //if current hour is 10 set present for 10 set 9 for past and everything else future
    if(parseInt(currentHour)>8 && parseInt(currentHour)<=17){
      for(var i = 0; i<calendarElementsLength; i++){
        if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])<currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block past');
        } else if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])==currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block present');
        } else if(parseInt(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])>currentHour){
          $('#calendarContainer').children().eq(i).attr('class', 'row time-block future');
        }
      }

    }
    // Code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. Id
    // attribute of each time-block is used to do this through DOM traversal.

    // gets the task into localStorage using a for loop with dom traversal
    for(var i = 0; i<calendarElementsLength; i++){
      $('#calendarContainer').children().eq(i).children().eq(1).text(JSON.parse(localStorage.getItem(($('#calendarContainer').children().eq(i).attr('id')).split("-")[1])));
    }
    // Displays the current date in the header of the page.
    $('#currentDay').text(today.format('dddd, MMMM D')+"th");
  });

  $();
  
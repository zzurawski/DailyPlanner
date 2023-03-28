// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

// in the html.
let save = $(".saveBtn"); 

let hour = dayjs().hour();

$(function() {
  //display current date
  $("#currentDay").text("Today is: " + dayjs().format('MM/DD/YYYY'));

  //save hourly task
  save.on('click',function(){

    let taskHour = $(this).parent().attr("id").split("-")[1];
    let task = $(this).siblings('.description').val();
    
    console.log(task)
    localStorage.setItem(taskHour, task);

    });

  //set color if past, present, future and displays cooresponding notes
  for(let i=8; i < 18; i++) {

    if(i === hour) {
      $("#hour-" + i).addClass("present");
    } else if (i > hour) {
      $("#hour-" + i).addClass("future");
    } else if (i < hour) {
      $("#hour-" + i).addClass("past");
    }
  }

})

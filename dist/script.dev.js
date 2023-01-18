"use strict";

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Adds timeblocks 9am-5pm
$(document).ready(function () {
  for (var i = 9; i <= 17; i++) {
    var timeBlock = $("<div>").attr("id", "hour-" + i).addClass("row time-block");
    var hourValue = i;
    var ampm = "AM";

    if (i > 12) {
      hourValue = i - 12;
      ampm = "PM";
    }

    var hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hourValue + ampm);
    var textArea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
    var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html("<i class='fas fa-save' aria-hidden='true'></i>"); // TODO: Add a listener for click events on the save button. 

    saveBtn.on("click", function () {
      var text = $(this).parent().find(".description").val();
      var timeBlockId = $(this).parent().attr("id");
      localStorage.setItem(timeBlockId, text);
    });
    timeBlock.append(hour, textArea, saveBtn);
    $(".container-lg").append(timeBlock);
  } // Add code to get any user input that was saved in localStorage and set


  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    var event = localStorage.getItem(blockHour);
    $(this).find("textarea").val(event);
  }); // Add code to apply the past, present, or future class to each timeblock

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = new Date().getHours();

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  }); // Add code to display the current date in the header of the page.

  var currentDate = new Date();
  $("#currentDay").text(currentDate.toLocaleDateString());
});
//# sourceMappingURL=script.dev.js.map

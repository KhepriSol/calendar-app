"use strict";

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  for (var i = 9; i <= 17; i++) {
    var timeBlock = $("<div>").attr("id", "hour-" + i).addClass("row time-block");
    var hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i + "AM");
    var textArea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
    var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html("<i class='fas fa-save' aria-hidden='true'></i>");
    saveBtn.on("click", function () {
      var text = $(this).parent().find(".description").val();
      var timeBlockId = $(this).parent().attr("id");
      localStorage.setItem(timeBlockId, text);
    });
    timeBlock.append(hour, textArea, saveBtn);
    $(".container-lg").append(timeBlock);
  }

  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    var event = localStorage.getItem(blockHour);
    $(this).find("textarea").val(event);
  });
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
  });
  var currentDate = new Date();
  $("#currentDay").text(currentDate.toLocaleDateString());

  for (var i = 9; i <= 17; i++) {
    var timeBlock = $("<div>").attr("id", "hour-" + i).addClass("row time-block");
    var hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i + "AM");
    var textArea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
    var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html("<i class='fas fa-save' aria-hidden='true'></i>");
    timeBlock.append(hour, textArea, saveBtn);
    $(".container-lg").append(timeBlock);
  } // TODO: Add a listener for click events on the save button. This code should
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
//# sourceMappingURL=script.dev.js.map

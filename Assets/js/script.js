// define global variables
var current = moment().hours();

console.log(current);

// added a timer with AM/PM
function update() {
    $('#clock').html(moment().format('h:mm:ss A'));
  }
  
  setInterval(update, 1000);

  // console.log(update);

// load the document html and css before third party
$(document).ready(function () {

    // added current date to the top of the planner
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);

    console.log(date);

    // adding past, present, future CSS classes 

    function currentTime() {
        var current = moment().hours();
        console.log(current);

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));
            console.log(current, blockTime)

            if (blockTime < current) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockTime === current) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }   
        })
    }
    currentTime();
    
    // load any localStorage previously saved - # to get id
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    // saving user input to localStorage on save btn click
    // Inside the jQuery "this" will hold the original element selected (saveBtn - "click")
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var time = $(this).parent().attr("id");
        var reminder = $(this).siblings(".description").val();
        
        // Had this originally as localStorage.setItem(reminder, time); which was breaking the way the items were 
        // being stored in local storage.. 
        localStorage.setItem(time, reminder);

    })

})

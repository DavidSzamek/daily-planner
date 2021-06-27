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
    var date = moment().format('dddd MMMM Do');

    $('#currentDay').text(date);

    console.log(date);


    // adding past, present, future CSS classes 

    function currentTime() {
    // use var current from above 
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
})


var button = $('.saveBtn')

//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $('#currentDay').text(date);
});
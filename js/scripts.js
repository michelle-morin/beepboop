// Back-end (business) logic:

function makeListOfNumbers(number) {
  var numbers = [];
  for (var index = 0; index <= number; index ++) {
    numbers.push(index);
  }
  return numbers;
}

// Front-end (user interface) logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").show();

    var userInputNumber = parseInt($("input#number").val());
    var userName = $("input#name").val();

    $("ul#result").empty();

    if (isNaN(userInputNumber)) {
      $("#output h3").hide();
      $("ul#result").text("Please enter a number.")
    } else {
      $("#output h3").show();
      $(".input-number").text(userInputNumber);

      var listOfNumbers = makeListOfNumbers(userInputNumber);
  
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
    }
  });
});
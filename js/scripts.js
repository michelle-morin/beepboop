// Back-end (business) logic:

function makeListOfNumbers(number) {
  var numbers = [];
  for (var index = 0; index <= number; index ++) {
    numbers.push(index);
  }
  for (var i = 0; i <= number; i ++) {
    if (i === 3) {
      numbers[i] = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (i === 2) {
      numbers[i] = "Boop!"
    } else if (i === 1) {
      numbers[i] = "Beep!"
    }
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
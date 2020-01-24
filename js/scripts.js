// Back-end (business) logic:

function makeListOfNumbers(number, userName) {
  var numbers = [];
  for (var index = 0; index <= number; index ++) {
    numbers.push(index);
  }
  for (var i = 0; i <= number; i ++) {
    if (i.toString().includes("3")) {
      numbers[i] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    } else if (i.toString().includes("2")) {
      numbers[i] = "Boop!";
    } else if (i.toString().includes("1")) {
      numbers[i] = "Beep!";
    }
  }
  return numbers;
}

// Front-end (user interface) logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("ul#result").empty();

    var userInputNumber = parseInt($("input#number").val());
    var userName = $("input#name").val();
    if (!userName) {
      userName = "Dave";
    }

    if (isNaN(userInputNumber)) {
      $("#output h3").hide();
      $("ul#result").text("Please enter a number.")
    } else {
      $("#output h3").show();
      $(".input-number").text(userInputNumber);
      var listOfNumbers = makeListOfNumbers(userInputNumber, userName);
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
    }
  });
});
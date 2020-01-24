// Back-end (business) logic:

function makeListOfNumbers(number, userName) {
  var numbers = [];
  for (var index = 0; index <= number; index ++) {
    numbers.push(index);
  }
  for (var i = 0; i <= number; i ++) {
    if (i.toString().includes("3") && i %3 === 0) {
      numbers[i] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    }
    else if (i.toString().includes("3")) {
      numbers[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
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
      $("h3.no-number").show();
      $("h3.yes-number").hide();
      $("img.yes-number").hide();
      $("img.no-number").show();
    } else {
      $("h3.yes-number").show();
      $("h3.no-number").hide();
      $("img.yes-number").show();
      $("img.no-number").hide();
      $(".up-down").text("down");
      $(".input-number").text(userInputNumber);
      var listOfNumbers = makeListOfNumbers(userInputNumber, userName);
      listOfNumbers.reverse();
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
    }
  });
  $("button#count-up").click(function(event) {
    event.preventDefault();
    $("#output").show();
    $("ul#result").empty();

    var userInputNumber = parseInt($("input#number").val());
    var userName = $("input#name").val();
    if (!userName) {
      userName = "Dave";
    }

    if (isNaN(userInputNumber)) {
      $("h3.yes-number").hide();
      $("h3.no-number").show();
      $("img.yes-number").hide();
      $("img.no-number").show();
    } else {
      $("h3.yes-number").show();
      $("h3.no-number").hide();
      $("img.yes-number").show();
      $("img.no-number").hide();
      $(".up-down").text("up");
      $(".input-number").text(userInputNumber);
      var listOfNumbers = makeListOfNumbers(userInputNumber, userName);
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
    }
  });
});
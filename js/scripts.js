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
  function animateCounter() {
    setTimeout(function() {
      $("#counting").fadeIn()
      setTimeout(function() {
        $("#counting").fadeOut();
        setTimeout(function() {
          $("#output").fadeIn();
        }, 500);
      }, 1500);
    }, 500);
  }

  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#result").empty();
    $("#output").hide();

    var userInputNumber = parseInt($("input#number").val());
    var userName = $("input#name").val();
    if (!userName) {
      userName = "Dave";
    }

    if (isNaN(userInputNumber)) {
      animateCounter();
      $("h3.no-number").show();
      $("h3.yes-number").hide();
      $("img.yes-number").hide();
      $("img.no-number").show();
    } else {
      animateCounter();
      $("h3.no-number").hide();
      $("img.no-number").hide();
      $(".up-down").text("down from");
      $(".input-number").text(userInputNumber);
      var listOfNumbers = makeListOfNumbers(userInputNumber, userName);
      listOfNumbers.reverse();
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
      $("h3.yes-number").show();
      $("img.yes-number").show();
    }
  });
  $("button#count-up").click(function(event) {
    event.preventDefault();
    $("ul#result").empty();
    $("#output").hide();

    var userInputNumber = parseInt($("input#number").val());
    var userName = $("input#name").val();
    if (!userName) {
      userName = "Dave";
    }

    if (isNaN(userInputNumber)) {
      animateCounter();
      $("h3.yes-number").hide();
      $("h3.no-number").show();
      $("img.yes-number").hide();
      $("img.no-number").show();
    } else {
      animateCounter();
      $("img.no-number").hide();
      $("h3.no-number").hide();
      $(".up-down").text("up to");
      $(".input-number").text(userInputNumber);
      var listOfNumbers = makeListOfNumbers(userInputNumber, userName);
      listOfNumbers.forEach(function(number) {
        $("ul#result").append("<li>" + number + "</li>");
      });
      $("h3.yes-number").show();
      $("img.yes-number").show();
    }
  });
});
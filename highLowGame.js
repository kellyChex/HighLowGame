$(document).ready(function(){

  $("button#begin").click(function() {
    var computer = Math.floor(Math.random()*100+1);
    console.log(computer);
    var numberOfAttempts = 0;

    for(i = 1; i <= 100; i++) {
      $('body').append('<div class="numbers" id="div'+ i +'" >' + i + '</div>');
      $("div#div" + i).click(function(){
        var currentAttempt = parseInt($(this).text());
        $(this).css("visibility", "hidden");
        $(".answer").empty();
        numberOfAttempts++;

        if (computer === currentAttempt) {
          $(".answer").append("You got it!");
          numberOfAttempts = 7;
        }
        else if (computer < currentAttempt) {
          $(".answer").append("Too High!");
        }
        else if (computer > currentAttempt) {
          $(".answer").append("Too Low!");
        }

        if (numberOfAttempts === 7) {
          alert("You've used up all your chances! The number was: " + computer);
          $("div").off("click");
        }
      });
    }
  }); // end button#begin

});

var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];



var started=false;
var level=0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
    started=true;
  }
});

$(".btn").click(function(){
    var userChoosenColour=$(this).attr("id");
    userClickedPattern.push(userChoosenColour);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
  userClickedPattern=[];
  level++;
    // $("#level-title").text("Level "+level);
      $("#level-title").text("Level " + level);
  var randomNumber=Math.floor(Math.random()*4);

  var randomChoosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChoosenColour);
  $("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColour);

}



// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }


function playSound(name) {
  var audio = new Audio("./Assets/sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}




function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");



  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}
  else{
    console.log("wrong");
    playSound("wrong");
    // $("body").addClass(".game-over").delay(200).removeClass(".game-over");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}


function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}

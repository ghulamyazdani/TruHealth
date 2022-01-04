var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
var diceNumber1="dice"+randomNumber1+".png";
var imageSource1="./Assets/Images/"+diceNumber1;
document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;
var diceNumber2="dice"+randomNumber2+".png";
var imageSource2="./Assets/Images/"+diceNumber2;
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
else{
  document.querySelector("h1").innerHTML="It's a tie!!!";
}

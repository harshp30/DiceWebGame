//Randomizer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//Left dice
if(randomNumber1 === 1){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}else if(randomNumber1 === 2){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}else if(randomNumber1 === 3){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}else if(randomNumber1 === 4){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}else if(randomNumber1 === 5){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}else if(randomNumber1 === 6){
  document.getElementById("leftSide").src = "images/dice"+randomNumber1+".png"
}
//Right dice
if(randomNumber2 === 1){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}else if(randomNumber2 === 2){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}else if(randomNumber2 === 3){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}else if(randomNumber2 === 4){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}else if(randomNumber2 === 5){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}else if(randomNumber2 === 6){
  document.getElementById("rightSide").src = "images/dice"+randomNumber2+".png"
}
//Title Change
if(randomNumber1 > randomNumber2){
  document.querySelector(".heading").innerHTML = " 🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector(".heading").innerHTML = "Player 2 Wins!  🚩";
}else if(randomNumber1 === randomNumber2){
  document.querySelector(".heading").innerHTML = "Draw!";
}

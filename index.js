var playerOneNumber = Math.floor((Math.random()*6)+1);
var playerTwoNumber = Math.floor((Math.random()*6)+1);

if(playerOneNumber > playerTwoNumber){
    document.querySelector("h1").innerHTML = "Player one wins";
} else if(playerOneNumber < playerTwoNumber){
    document.querySelector("h1").innerHTML = "Player two wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

document.querySelector(".img1").src = "images/dice" + playerOneNumber + ".png";
document.querySelector(".img2").src = "images/dice" + playerTwoNumber + ".png";

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDieceImage = "dice" + randomNumber1 + ".png";

var randomDieceSource = "./images/" + randomDieceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDieceSource);

//

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDieceSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDieceSource2);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "😎 Player1 IS Winner"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player2 IS Winner 😎"
}
else {
    document.querySelector("h1").textContent = "Draw!!!😗"
}
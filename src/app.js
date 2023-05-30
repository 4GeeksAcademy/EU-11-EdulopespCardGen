/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const theSymbolElement = document.getElementsByClassName("theSymbol");
const numberElement = document.getElementById("theNumber");

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const symbol = ["♦", "♥", "♠", "♣"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  //write your code here
  let randomSymbol = getRandomElementFromArray(symbol);
  let randomNumber = getRandomElementFromArray(numbers);

  for (let i = 0; i < theSymbolElement.length; i++) {
    theSymbolElement[i].innerHTML = randomSymbol;
    if (randomSymbol == "♥" || randomSymbol == "♦") {
      theSymbolElement[i].classList.add("cardRed");
    }
  }
  numberElement.innerHTML = randomNumber;
};

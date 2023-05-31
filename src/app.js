/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const theSymbolElement = document.getElementsByClassName("theSymbol");
const numberElement = document.getElementById("theNumber");
const widthElement = document.getElementById("inputWidth");
const heightElement = document.getElementById("inputHeight");
const cardElement = document.getElementById("cardSize");

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const symbol = ["♦", "♥", "♠", "♣"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

widthElement.addEventListener("input", function() {
  cardElement.style.width = widthElement.value + "px";
  if (widthElement.value < 285) {
    cardElement.style.width = "285px";
  }
});

heightElement.addEventListener("input", function() {
  cardElement.style.height = heightElement.value + "px";
  if (heightElement.value < 444) {
    cardElement.style.height = "444px";
  }
});

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

  const timerInterval = setInterval(timerReload, 10000);
  function timerReload() {
    location.reload();
  }
};

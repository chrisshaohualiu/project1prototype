"use strict";

let gameBoard = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let randomArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

shuffle(randomArray);

for (let i = 0; i < 16; i++) {
  let place = {
    symbol: randomArray[i],
    hasACard: true,
  };
  gameBoard.push(place);
}

let placesDiv = document.querySelectorAll(".places");

const matchCheck = (card1, card2) => {
  return card1.symbol === card2.symbol;
};

let faceUpCards = [];

const display = () => {
  placesDiv.forEach((place, index) => {
    place.innerText = gameBoard[index].symbol;
    place.setAttribute("data-symbol", gameBoard[index].symbol);

    place.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("data-index"));

      let card = {
        index: e.target.getAttribute("data-index"),
        symbol: e.target.getAttribute("data-symbol"),
      };
      faceUpCards.push(card);
      console.log(faceUpCards);

      if (faceUpCards.length === 1) {
        e.target.classList.add("yellow");
      } else if (faceUpCards.length === 2) {
        placesDiv[faceUpCards[0].index].classList.remove("yellow");
        if (faceUpCards[0].symbol === faceUpCards[1].symbol) {
          placesDiv[faceUpCards[0].index].classList.add("green");
          placesDiv[faceUpCards[1].index].classList.add("green");
        } else {
          /*placesDiv[faceUpCards[0].index].classList.add("red");
          placesDiv[faceUpCards[1].index].classList.add("red");
          setTimeout(function () {
            placesDiv[faceUpCards[0].index].classList.remove("red");
            placesDiv[faceUpCards[1].index].classList.remove("red");
          }, 1000);*/
        }
        faceUpCards = [];
      }
    });
  });
};

display();

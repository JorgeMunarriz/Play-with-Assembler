//Name Input

//Funcion Input
let playerNumber = 1;
let player = "player_" + playerNumber;

function pickName() {
  let newPlayer = inputName.value;
  

  if (newPlayer.length > 3 && newPlayer.length < 15) {
    localStorage.setItem(player, newPlayer);
    playerNumber++;
    
  } else return;
}

//EventLIstener
// inputName.addEventListener("submit", function (event) {
//   event.preventDefault;
//   pickName();
// });

function createCardsEasy() {
  const gameEasy = document.querySelector("#gameEasy");

  for (let i = 0; i < 16; i++) {
    const cardsContainer = document.createElement("div");
    const cardsImg = document.createElement("img");
    const cardsBack = document.createElement("div");

    cardsContainer.classList.add("card-container");
    cardsImg.classList.add("card");
    cardsImg.src = "assets/" + shuffledCards[i] + ".png";
    cardsBack.classList.add("card-back");


    gameEasy.appendChild(cardsContainer);
    cardsContainer.appendChild(cardsImg);
    cardsContainer.appendChild(cardsBack);
  }
   
    
}
function createCardsDifficult() {
    const gameDifficult = document.querySelector("#gameDifficult");
  
    for (let i = 0; i < 30; i++) {
      const cardsContainer = document.createElement("div");
      const cardsImg = document.createElement("img");
      const cardsBack = document.createElement("div");
  
      cardsContainer.classList.add("card-container");
      cardsImg.classList.add("card");
      cardsImg.src = "assets/" + shuffledCards[i] + ".png";
      cardsBack.classList.add("card-back");
  
  
      gameDifficult.appendChild(cardsContainer);
      cardsContainer.appendChild(cardsImg);
      cardsContainer.appendChild(cardsBack);
    }
     
      
  }


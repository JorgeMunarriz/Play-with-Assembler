//Name Input

//Funcion Input
function pickName() {
  let newPlayer = inputName.value;
  if (newPlayer.length > 3 && newPlayer.length < 15) {
    localStorage.setItem("player", newPlayer);
  } else return;
}
//EventLIstener
inputName.addEventListener("input", function (event) {
  event.preventDefault;
  pickName();
});

function createCardsEasy() {
  const gameDifficult = document.querySelector("#gameDifficult");

  for (let i = 0; i < 16; i++) {
    const cardsContainer = document.createElement("div");
    const cardsImg = document.createElement("img");
    const cardsBack = document.createElement("div");

    cardsContainer.classList.add("card-container");
    cardsImg.classList.add("card");
    cardsBack.classList.add("card-back");

    cardsContainer.appendChild(gameDifficult);
    cardsImg.appendChild(cardsContainer);
    cardsBack.insertAdjacentElement("afterend", cardsImg);
  }
}

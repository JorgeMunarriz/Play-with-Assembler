/* ---------Page 2   */
// para que se cargue el documento

// formulario y el botón de Play
const form = document.querySelector("#formUser");
const btnPlay = document.querySelector("#btnPlay");
//Input Name selector
const inputName = document.querySelector("#inputName");
const mainPage = document.querySelector("#mainPage");
const page2 = document.querySelector("#mainPage2");
const page3 = document.querySelector("#mainPage3");
const page4 = document.querySelector("#mainPage4");
const page5 = document.querySelector("#mainPage5");

//  formulario
btnPlay.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita la recarga de la página
  let newPlayer = inputName.value;

  if (newPlayer.length > 3 && newPlayer.length < 15) {
    localStorage.setItem(player, newPlayer);
    playerNumber++;

    const headerMain = document.querySelector("#headerMain");
    mainPage.style.display = "none";
    headerMain.hidden = true;
    page2.hidden = false;

    // texto pagina 2
    const nameUser = document.querySelector("#nameUser");
    nameUser.textContent = `Choose An Option, ${inputName.value}!`;
  } else return;
});

/*----------page 2      */
let shuffledCards = [];

function shuffleEasy() {
  const cards = [
    "Batman",
    "Captain America",
    "Catwoman",
    "Green lantern",
    "Groot",
    "Hulk",
    "Iron man",
    "Spiderman",
    "Wolverine",
    "Wonder Woman",
  ];
  while (shuffledCards.length < 8) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    if (!shuffledCards.includes(card)) {
      shuffledCards.push(card);
      cards.splice(randomIndex, 1);
    }
  }
  shuffledCards = shuffledCards.concat(shuffledCards);
  for (let i = 0; i < shuffledCards.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
}
const btnEasy = document.querySelector("#easy");
btnEasy.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page3.classList.remove("hidden");
  shuffleEasy();
  createCardsEasy();
});
const btnHard = document.querySelector("#hard");
btnHard.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page4.classList.remove("hidden");
  shuffleDifficult();
  createCardsDifficult();
});

/* ---------Page 2   */
// para que se cargue le documento
const main = document.getElementById("main")
const mainPage = document.getElementById("mainPage");
const page2 = document.getElementById("mainPage2");
const page3 = document.getElementById("mainPage3");
const page4 = document.getElementById("mainPage4");
const page5 = document.getElementById("mainPage5");



const btnPlay = document.getElementById("btnPlay");
let playerNumber = 1;
let player = "player_" + playerNumber;

btnPlay.addEventListener("click", function (event) {
  event.preventDefault();
  let newPlayer = inputName.value;

  if (newPlayer.length > 3 && newPlayer.length < 15) {
    
    localStorage.setItem(player, newPlayer);
    playerNumber++;
    
    const headerMain = document.querySelector("#headerMain");
    mainPage.style.display = "none";
    headerMain.hidden = true;
    page2.hidden = false;

    const nameUser = document.querySelector("#nameUser");
    nameUser.textContent = `Choose An Option, ${newPlayer}!`;
  } else {
    return;
  }
});
const userScore = document.createElement("h2");
  userScore.textContent = `User scores`;
  userScore.classList.add("user-h2")
  scoreboard.appendChild(userScore)

/*----------page 2      */


// function shuffleEasy() {
//   const cards = [
//     "Batman",
//     "Captain America",
//     "Catwoman",
//     "Green lantern",
//     "Groot",
//     "Hulk",
//     "Iron man",
//     "Spiderman",
//     "Wolverine",
//     "Wonder Woman",
//   ];
//   while (shuffledCards.length < 8) {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     const card = cards[randomIndex];
//     if (!shuffledCards.includes(card)) {
//       shuffledCards.push(card);
//       selectedCards.push(false);
//       cards.splice(randomIndex, 1);
//     }
//   }
//   shuffledCards = shuffledCards.concat(shuffledCards);
//   for (let i = 0; i < shuffledCards.length; i++) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
//   }
// }
const btnEasy = document.querySelector("#easy");
btnEasy.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page3.classList.remove("hidden");
  shuffleEasy();
  createCardsEasy();
  createScoreEasy();
});
const btnHard = document.querySelector("#hard");
btnHard.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page4.classList.remove("hidden");
  shuffleDifficult();
  createCardsDifficult();
  startTimer();
  createScoreDifficult();
});


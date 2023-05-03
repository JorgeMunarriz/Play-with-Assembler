/* ---------Page 1   */
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
    
    const headerMain = document.getElementById("headerMain");
    mainPage.style.display = "none";
    headerMain.hidden = true;
    page2.hidden = false;

    const nameUser = document.getElementById("nameUser");
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

const btnEasy = document.getElementById("easy");
btnEasy.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page3.classList.remove("hidden");
  shuffleEasy();
  createCardsEasy();
  startTimer();
  createScoreEasy();
  
});
const btnHard = document.getElementById("hard");
btnHard.addEventListener("click", function () {
  page2.hidden = true;
  headerMain.hidden = false;
  page4.classList.remove("hidden");
  shuffleDifficult();
  createCardsDifficult();
  startTimer();
  createScoreDifficult();
});


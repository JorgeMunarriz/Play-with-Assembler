//scoreboardEasy Selector
const scoreboard = document.querySelector("#scoreboard");
const scoreboardEasy = document.querySelector("#scoreboardEasy");
const scoreboardEasyDiff = document.querySelector("#scoreboardDifficult");
const scoreDiv1 = document.querySelector(".container-right1");
const scoreDiv2 = document.querySelector(".container-right2");
const btnReloaded = document.querySelector("#btnReload")

//constants game
let moves = 0;
let matches = 0;
let shuffledCards = [];
let selectedCards = [];

//Succeses Variable
let playerSucces = 0;
//Time Variable
let startTimer = null;
let hightScores = [{ player: "", level: "", moves: "", time: "", matches: "" }];

//Function to create scoreboardEasy item
function saveScore(level, moves, time, matches) {
  const user = localStorage.getItem(player);
  hightScores.push({ user, level, moves, time, matches });
  localStorage.setItem("hightScores", JSON.stringify(hightScores));
}

function createScore() {
  const newPlayer = document.createElement("h3");
  newPlayer.textContent = localStorage.getItem(player);
  scoreboard.appendChild(newPlayer);

  const timePassed = document.createElement("p");
  timePassed.setAttribute("class", "time-passed");
  timePassed.setAttribute("id", "timePassed");
  scoreboard.appendChild(timePassed);

  const succeses = document.createElement("p");
  succeses.setAttribute("class", "player-score");
  succeses.setAttribute("id", "playerScore");
  scoreboard.appendChild(succeses);
  const movesP = document.createElement("p");
  movesP.setAttribute("class", "player-score");
  movesP.setAttribute("id", "movesP");
  scoreboard.appendChild(movesP);
  scoreboard.scrollTop = scoreboard.scrollHeight;
  const matchesP = document.createElement("p");
  matchesP.setAttribute("class", "player-score");
  matchesP.setAttribute("id", "matchesP");
  scoreboard.appendChild(matchesP);
}
function createScoreEasy() {
  const newPlayer = document.createElement("h3");
  newPlayer.textContent = localStorage.getItem(player);
  scoreboardEasy.appendChild(newPlayer);

  const timePassed = document.createElement("p");
  timePassed.setAttribute("class", "time-passed");
  timePassed.setAttribute("id", "timePassed");
  scoreboardEasy.appendChild(timePassed);

  const succeses = document.createElement("p");
  succeses.setAttribute("class", "player-score");
  succeses.setAttribute("id", "playerScore");
  scoreboardEasy.appendChild(succeses);
  const movesP = document.createElement("p");
  movesP.setAttribute("class", "player-score");
  movesP.setAttribute("id", "movesP");
  scoreboardEasy.appendChild(movesP);
  scoreboardEasy.scrollTop = scoreboardEasy.scrollHeight;
  const matchesP = document.createElement("p");
  matchesP.setAttribute("class", "player-score");
  matchesP.setAttribute("id", "matchesP");
  scoreboardEasy.appendChild(matchesP);
  const btnReload = document.createElement("button");
  btnReload.classList.add("btn-reload");
  btnReload.textContent = "Reload";
  scoreDiv1.insertAdjacentElement("afterend", btnReload);
  startTimer();
  saveScore("easy", moves, timer, playerSucces);
}
function createScoreDifficult() {
  const newPlayer = document.createElement("h3");
  newPlayer.textContent = localStorage.getItem(player);
  scoreboardDifficult.appendChild(newPlayer);

  const timePassed = document.createElement("p");
  timePassed.setAttribute("class", "time-passed");
  timePassed.setAttribute("id", "timePassed");
  scoreboardDifficult.appendChild(timePassed);
  let timer = 120;
  let timeLocal = Date.now()
  timer = timeLocal - timePassed

  const succeses = document.createElement("p");
  succeses.setAttribute("class", "player-score");
  succeses.setAttribute("id", "playerScore");
  scoreboardDifficult.appendChild(succeses);
  const movesP = document.createElement("p");
  movesP.setAttribute("class", "player-score");
  movesP.setAttribute("id", "movesP");
  scoreboardDifficult.appendChild(movesP);
  scoreboardDifficult.scrollTop = scoreboardDifficult.scrollHeight;
  const matchesP = document.createElement("p");
  matchesP.setAttribute("class", "player-score");
  matchesP.setAttribute("id", "matchesP");
  scoreboardDifficult.appendChild(matchesP);
  const btnReload = document.createElement("button");
  btnReload.classList.add("btn-reload");
  btnReload.textContent = "Reload";
  scoreDiv2.insertAdjacentElement("afterend", btnReload);

  startTimer();
  saveScore("difficult", moves, timer, playerSucces);
}
function startTimer() {
  clock = setInterval(() => {
    timer++;
    const timePassed = document.querySelector("#timePassed");
    timePassed[timePassed.length - 1] = timer;
  }, 1000);
}
function stopTimer() {
  clearInterval(clock);
}


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
      selectedCards.push(false);
    }
  }
  shuffledCards = shuffledCards.concat(shuffledCards);
  for (let i = 0; i < shuffledCards.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    selectedCards.splice(j, 0, selectedCards.splice(i, 1)[0]);
  }
  return [shuffledCards, selectedCards];
}
function selelectCards(index) {
  if (!selectedCards[index]) {
    selectedCards[index] = true;
    return shuffledCards[index];
  }
  return null;
}


let cardDifficult = shuffledCards;
function shuffleDifficult() {
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
    "Wonder woman",
  ];
  while (shuffledCards.length < 10) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    if (!shuffledCards.includes(card)) {
      shuffledCards.push(card);
      selectedCards.push(false);
      cards.splice(randomIndex, 1);
    }
  }

  shuffledCards = shuffledCards.concat(shuffledCards, shuffledCards);
  for (let i = 0; i < shuffledCards.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
}

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

function handleCardClick(card) {
  if (canClickCard(card)) {
    card.classList.add("flipped");
    selectedCards.push(card);
    if (selectedCards.length === 2) {
      moves++; // Incrementar el contador de movimientos
      updateMoves(); // Actualizar la pantalla con el número de movimientos
      if (cardsMatch(selectedCards[0], selectedCards[1])) {
        matches++;
        updateMatches(); // Actualizar la pantalla con el número de aciertos
        selectedCards.forEach((card) => card.classList.add("matched"));
        selectedCards = [];
        if (matches === totalMatches) {
          handleGameEnd();
        }
      } else {
        setTimeout(() => {
          selectedCards.forEach((card) => card.classList.remove("flipped"));
          selectedCards = [];
        }, 1000);
      }
    }
  }
}
function updateMoves() {
  const movesElement = document.querySelector("#moves");
  movesElement.textContent = moves;
  localStorage.setItem("moves", moves); // Guardar el número de movimientos en la memoria local
}

function updateMatches() {
  const matchesElement = document.querySelector("#matches");
  matchesElement.textContent = matches;
  localStorage.setItem("matches", matches); // Guardar el número de aciertos en la memoria local
}

function initCounters() {
  moves = 0;
  matches = 0;
  updateMoves();
  updateMatches();
  const savedMoves = localStorage.getItem("moves");
  if (savedMoves) {
    moves = parseInt(savedMoves);
    updateMoves();
  }
  const savedMatches = localStorage.getItem("matches");
  if (savedMatches) {
    matches = parseInt(savedMatches);
    updateMatches();
  }
}

btnReloaded.addEventListener("click", resetGame)

function resetGame() {
    shuffledCards = [];
    selectedCards = [];
    stopTimer();
    initCounters()
    
  }
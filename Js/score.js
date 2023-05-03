//scoreboardEasy Selector
const scoreboard = document.querySelector("#scoreboard");
const scoreboardEasy = document.querySelector("#scoreboardEasy");
const scoreboardDiff = document.querySelector("#scoreboardDifficult");
const scoreDiv1 = document.querySelector(".container-right1");
const scoreDiv2 = document.querySelector(".container-right2");
const btnReloaded = document.querySelector("#btnReloaded");
const divCards = document.querySelectorAll(".active")

//constants game
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
let moves = 0;
let matches = 0;
let shuffledCards = [];
let selectedCards = [];

//Succeses Variable
let playerSucces = 0;
//Time Variable
let timer = 0;
let scores = JSON.parse(localStorage.getItem("scores")) || [];

//Function to create scoreboardEasy item
function saveScore(level, moves, time, matches) {
  const user = localStorage.getItem(player);
  scores.push({ user, level, moves, time, matches });
  localStorage.setItem("scores", JSON.stringify(scores));
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
  btnReload.setAttribute("id", "btnReloaded");
  btnReload.textContent = "Reload";
  scoreDiv1.insertAdjacentElement("afterend", btnReload);
  startTimer();
  saveScore("easy", moves, timer, playerSucces);
}
function createScoreDifficult() {
  const newPlayer = document.createElement("h3");
  newPlayer.textContent = localStorage.getItem(player);
  scoreboardDiff.appendChild(newPlayer);

  const timePassed = document.createElement("p");
  timePassed.setAttribute("class", "time-passed");
  timePassed.setAttribute("id", "timePassed");
  scoreboardDiff.appendChild(timePassed);
  let timer = 120;
  let timeLocal = Date.now();
  timePassed = timer - timeLocal;

  const succeses = document.createElement("p");
  succeses.setAttribute("class", "player-score");
  succeses.setAttribute("id", "playerScore");
  scoreboardDiff.appendChild(succeses);
  const movesP = document.createElement("p");
  movesP.setAttribute("class", "player-score");
  movesP.setAttribute("id", "movesP");
  scoreboardDiff.appendChild(movesP);
  scoreboardDiff.scrollTop = scoreboardDiff.scrollHeight;
  const matchesP = document.createElement("p");
  matchesP.setAttribute("class", "player-score");
  matchesP.setAttribute("id", "matchesP");
  scoreboardDiff.appendChild(matchesP);
  const btnReload = document.createElement("button");
  btnReload.classList.add("btn-reload");
  btnReload.setAttribute("id", "btnReloaded");
  btnReload.textContent = "Reload";
  scoreDiv2.insertAdjacentElement("afterend", btnReload);

  startTimer();
  saveScore("difficult", moves, timer, matches);
}

function startTimer() {
  clock = setInterval(() => {
    timer++;
    const timePassed = document.querySelector("#timePassed");
    timePassed.textContent = `Time passed: ${timer}`;
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
}

function shuffleEasy() {
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

let cardDifficult = shuffledCards;
function shuffleDifficult() {
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
    cardsBack.classList.add("active");

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
const flippedCards = [];
function flipCard() {
    if (flippedCards === 0) {
      firstCard = this;
      firstCard.classList.add('flipped');
      flippedCards = 1;
    } else {
      secondCard = this;
      secondCard.classList.add('flipped');
      flippedCards = 2;
      flippedCards.push(cardId)
      compareCards();

    }
  }
  
  function compareCards() {
    if (firstCard.children[0].src === secondCard.children[0].src) {
      setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
      }, 1000);
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
      }, 1000);
    }
    flippedCards = 0;
  }
  

function selectCards(index) {
  if (!selectedCards[index]) {
    selectedCards[index] = true;
    return shuffledCards[index];
  }
  return null;
}
function canClickCard(cards) {
  return !cards.isActive && !cards.isFlipped;
}

function handleCardClick(cards) {
  if (canClickCard(cards)) {
    cards.classList.add("active");
    selectedCards.push(cards);
    if (selectedCards.length === 2) {
      moves++; // Incrementar el contador de movimientos
      updateMoves(); // Actualizar la pantalla con el número de movimientos
      if (cardsMatch(selectedCards[0], selectedCards[1])) {
        matches++;
        updateMatches(); // Actualizar la pantalla con el número de aciertos
        selectedCards.forEach((cards) => cards.classList.remove("active"));
        selectedCards = [];
        if (matches === totalMatches) {
          gameEnd();
        }
      } else {
        setTimeout(() => {
          selectedCards.forEach((cards) => cards.classList.add("active"));
          selectedCards = [];
        }, 1000);
      }
    }
  }
}
function updateMoves() {
  const movesElement = document.querySelector("#movesP");
  movesElement.textContent = moves;
  localStorage.setItem("moves", moves); // Guardar el número de movimientos en la memoria local
}

function updateMatches() {
  const matchesElement = document.querySelector("#matchesP");
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

if (btnReloaded && !btnReloaded.disabled) {
    
    btnReloaded.addEventListener("click", () => {
      resetGame();
      stopTimer();
      initCounters();
      shuffleEasy();
    });
  }

function resetGame() {

    stopTimer();
    initCounters();


  }

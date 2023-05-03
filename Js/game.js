let moves = 0;
let matches = 0;
let shuffledCards = [];
let selectedCards = [];

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
function resetGame() {
  shuffledCards = [];
  selectedCards = [];
  s;
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

let firstCard, secondCard;
let flippedCards = 0;

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
          selectedCards.forEach((card) => card.classList.remove('flipped'));
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


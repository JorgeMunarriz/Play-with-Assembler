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
    "Wonder Woman"
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
        cards.splice(randomIndex, 1);
      }
    }
   

   
    shuffledCards = shuffledCards.concat(shuffledCards, shuffledCards);
    for (let i = 0; i < shuffledCards.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    // cardDifficult = cardDifficult.concat(shuffledCards);
    // for (let i = 0; i < shuffledCards.length; i++) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [cardDifficult[i], cardDifficult[j]] = [cardDifficult[j], cardDifficult[i]];
    // }

  }
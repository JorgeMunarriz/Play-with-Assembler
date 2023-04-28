let shuffledCards = []
function shuffleEasy() {
    const cards = ["Batman", "Captain America", "Catwoman", "Green lantern", "card-4", "card-5", "card-6", "card-7", "card-8", "card-9", "card-10"];
    while (shuffledCards.length < 8) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        if (!shuffledCards.includes(card)) {
        shuffledCards.push(card);
            cards.splice(randomIndex, 1);
        }
        }
    shuffledCards = shuffledCards.concat(shuffledCards);
    for(let i = 0; i < shuffledCards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] =[shuffledCards[j], shuffledCards[i]]
}
};

let shuffledCards = []
const page1 = document.querySelector("#mainPage")
const page2 = document.querySelector("#mainPage2") 
const page3 = document.querySelector("#mainPage3")
const page4 = document.querySelector("#mainPage4")
const page5 = document.querySelector("#mainPage5")

function shuffleEasy() {
    const cards = ["Batman", "Captain America", "Catwoman", "Green lantern", "Groot", "Hulk", "Iron man", "Spiderman", "Wolverine", "card-9", "card-10"];
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

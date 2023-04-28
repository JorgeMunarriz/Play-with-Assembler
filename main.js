/* ---------Page 2   */ 
// para que se cargue le documento
document.addEventListener("DOMContentLoaded", function() {

    // formulario y el botón de Play
    const form = document.querySelector("#formUser");
    const btnPlay = document.querySelector("#btnPlay");
  
    //  formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita la recarga de la página
      const inputName = document.querySelector("#inputName");
  
      // valor positivo
      if (inputName.value.trim() !== "") {
        // Ocultar la primera pagina y visualizar la segunda
        const mainPage = document.querySelector("#mainPage");
        const mainPage2 = document.querySelector("#mainPage2");
        mainPage.hidden = true;
        mainPage2.hidden = false;
  
        // texto pagina 2
        const option = document.querySelector(".option");
        option.textContent = `Choose An Option, ${inputName.value}!`;
      }
    });
  
  });



/*----------page 2      */ 
let shuffledCards = []
const page1 = document.querySelector("#mainPage")
const page2 = document.querySelector("#mainPage2") 
const page3 = document.querySelector("#mainPage3")
const page4 = document.querySelector("#mainPage4")
const page5 = document.querySelector("#mainPage5")

function shuffleEasy() {
    const cards = ["Batman", "Captain America", "Catwoman", "Green lantern", "Groot", "Hulk", "Iron man", "Spiderman", "Wolverine", "Wonder Woman"];
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

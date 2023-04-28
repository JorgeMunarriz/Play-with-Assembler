//Scoreboard Selector
const scoreboard = document.querySelector("#scoreboard");
//Input Name selector
const inputName = document.querySelector("#inputName");
//Input buton selector
const btnPlay = document.querySelector(".btn-play");
//Succeses Variable
let playerSucces = 0;
//Function to create scoreboard item
function createScore(){
    const newPlayer = document.createElement("h3");
    newPlayer.textContent = localStorage.getItem('player');
    scoreboard.appendChild(newPlayer);

    const timePassed = document.createElement("p");
    timePassed.setAttribute("class", "time-passed");
    timePassed.setAttribute("id", "timePassed");
    scoreboard.appendChild(timePassed);

    const succeses = document.createElement("p");
    succeses.setAttribute("class", "player-score");
    succeses.setAttribute("id", "playerScore");
    scoreboard.appendChild(succeses);
};

//Eventlistener to btnPlay
btnPlay.addEventListener("click", saveNameToLocal)

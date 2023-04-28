//Scoreboard Selector
const scoreboard = document.querySelector("#scoreboard");
//Input Name selector
const inputName = document.querySelector("#inputName");
//Input buton selector
const btnPlay = document.querySelector(".btn-play");

//Function to store value of input on localStorage

function createScore(){
    const newPlayer = document.createElement("h3");
    newPlayer.textContent = localStorage.getItem('player');
}

//Eventlistener to btnPlay
btnPlay.addEventListener("click", saveNameToLocal)

//Scoreboard Selector
const scoreboard = document.querySelector("#scoreboard");
//Input Name selector
const inputName = document.querySelector("#inputName");
//Input buton selector
const btnPlay = document.querySelector(".btn-play");

//Function to store value of input on localStorage
function saveNameToLocal(){
    localStorage.setItem('player', inputName.value);
}

//Eventlistener to btnPlay
btnPlay.addEventListener("click", saveNameToLocal)

//Scoreboard Selector
const scoreboard = document.querySelector("#scoreboard");

//Succeses Variable
let playerSucces = 0;
//Time Variable
let timer = 0;
//Function to create scoreboard item
function createScore() {
  const newPlayer = document.createElement("h3");
  newPlayer.textContent = localStorage.getItem("player");
  scoreboard.appendChild(newPlayer);

  const timePassed = document.createElement("p");
  timePassed.setAttribute("class", "time-passed");
  timePassed.setAttribute("id", "timePassed");
  scoreboard.appendChild(timePassed);

  const succeses = document.createElement("p");
  succeses.setAttribute("class", "player-score");
  succeses.setAttribute("id", "playerScore");
  scoreboard.appendChild(succeses);
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
//Eventlistener to btnPlay

//Scoreboard Selector
const scoreboard = document.querySelector("#scoreboardEasy");

//Succeses Variable
let playerSucces = 0;
//Time Variable
let timer = 0;
//Function to create scoreboard item
function createScore() {
  const userScore = document.createElement("h2");
  userScore.textContent = `User's score`;
  userScore.classList.add("user-h2")
  scoreboard.appendChild(userScore)
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
  scoreboard.scrollTop = scoreboard.scrollHeight;
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

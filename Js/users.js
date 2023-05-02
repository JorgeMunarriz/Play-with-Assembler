//Name Input

//Funcion Input
let playerNumber = 1;
let player = "player_" + playerNumber;

function pickName() {
  let newPlayer = inputName.value;
  

  if (newPlayer.length > 3 && newPlayer.length < 15) {
    localStorage.setItem(player, newPlayer);
    playerNumber++;
    
  } else return;
}




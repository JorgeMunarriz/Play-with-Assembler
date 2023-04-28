//Name Input


//Funcion Input
function pickName(){
    let newPlayer = inputName.value;
    if (newPlayer.length > 3 && newPlayer.length < 15){
        localStorage.setItem("player", newPlayer)
    } else return
};
//EventLIstener
inputName.addEventListener("input", function(event){
    event.preventDefault;
    pickName()
})

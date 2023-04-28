//Name Input
let inputName = document.querySelector("#inputName");

//Funcion Input
function pickName(){
    let newPlayer = inputName.value;
    if (newPlayer.length > 3 && newPlayer.length < 15){
        localStorage.setItem("player", newPlayer)
    } else return
};
//EventLIstener
inputName.addEventListener("submit", function(event){
    event.preventDefault;
    pickName()
})

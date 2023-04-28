let player = { name: "" };
let inputName = document.querySelector("#inputName");


localStorage.setItem("player", JSON.stringify(player));
const playerLS = localStorage.getItem("player");
const playerObj = JSON.parse(playerLS);
console.log(playerObj)
inputName.addEventListener("submit", () => {
  if (player.name.length > 3 && player.name.length < 15) {
     playerObj = localStorage.setItem("player");

  }
});

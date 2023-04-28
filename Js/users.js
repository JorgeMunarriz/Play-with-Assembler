let player = { name: "Pedro" };
let input = document.querySelector("#inputName");
const page1 = document.querySelector("#mainPage")
const page2 = document.querySelector("#mainPage2") 
const page3 = document.querySelector("#mainPage3")
const page4 = document.querySelector("#mainPage4")
const page5 = document.querySelector("#mainPage5")

localStorage.setItem("player", JSON.stringify(player));
const playerLS = localStorage.getItem("player");
const playerObj = JSON.parse(playerLS);
console.log(playerObj)
input.addEventListener("click", () => {
  if (player.name.length > 3 && player.name.length < 15) {
    user = localStorage.getItem("player");

  }
});

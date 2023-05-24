import Game from "./models/Game.js";
import createNumInput from "./utils/createNumInput.js";
const screenWidth = window.screen.availWidth;
let height = { val: 10 };
let width = { val: 10 };
let difficult = { val: 25 };
let game;
const maxWidth = (Math.ceil((screenWidth - 400) / 175) * 5) + 10;
const newGameButton = document.getElementById("newGameMenu");
const widthSelector = document.getElementById("width-custom-num");
const heightSelector = document.getElementById("height-custom-num");
const difficultSelector = document.getElementById("difficult-custom-num");
widthSelector.querySelector(".num-input").setAttribute("max", maxWidth.toString());
heightSelector.value = height.toString();
widthSelector.value = width.toString();
difficultSelector.value = difficult.toString();
export function startNewGame() {
    game = new Game(height.val, width.val, difficult.val);
    game.drawTable();
}
newGameButton.addEventListener("click", startNewGame);
createNumInput(widthSelector, width);
createNumInput(heightSelector, height);
createNumInput(difficultSelector, difficult);
game = new Game(height.val, width.val, difficult.val);
game.drawTable();

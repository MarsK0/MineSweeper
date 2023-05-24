import { startNewGame } from "../index.js";
const gameElement = document.getElementById("game");
function createModal(result) {
    const modal = document.createElement("div");
    const button = document.createElement("button");
    const message = document.createElement("p");
    modal.id = "modal";
    button.classList.add("newGame");
    button.addEventListener("click", startNewGame);
    button.innerHTML = "New Game!";
    if (result === "win") {
        message.innerHTML = "Victory!";
        message.style.color = "#00ff00";
        modal.appendChild(message);
        modal.appendChild(button);
        gameElement.appendChild(modal);
    }
    else {
        message.innerHTML = "You Lose!";
        message.style.color = "#ff0000";
        modal.appendChild(message);
        modal.appendChild(button);
        gameElement.appendChild(modal);
    }
}
export default createModal;

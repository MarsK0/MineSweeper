const game = document.getElementById("game");
function createModal(result) {
    const modal = document.createElement("div");
    const button = document.createElement("button");
    const message = document.createElement("p");
    modal.setAttribute("id", "modal");
    button.classList.add("newGame");
    if (result === "win") {
        message.innerHTML = "VITÓRIA";
        message.style.color = "#00ff00";
        modal.appendChild(message);
        modal.appendChild(button);
        game.appendChild(modal);
    }
    else {
        message.innerHTML = "DERROTA";
        message.style.color = "#ff0000";
        modal.appendChild(message);
        modal.appendChild(button);
        game.appendChild(modal);
    }
}
export default createModal;

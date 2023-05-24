import checkBlankArea from "../functions/checkBlankArea.js";
import checkBombsAround from "../functions/checkBombsAround.js";
import setFieldBackground from "../functions/setFieldBackground.js";
import createModal from "../utils/createModal.js";
import checkWin from "../functions/checkWin.js";
const root = document.getElementById("root");
class Game {
    constructor(height, width, difficult) {
        this.height = height;
        this.width = width;
        this.difficult = difficult;
        this.table = [];
        this.isGameRunning = true;
        this.tableLength = (this.width * this.height - 1);
        const tableSize = this.height * this.width;
        let possibilities = [];
        for (let i = 0; i < (tableSize); i++) {
            possibilities.push(i);
        }
        this.bombs = Math.ceil((tableSize / 2) * (difficult / 100));
        this.clearFields = (this.height * this.width) - this.bombs;
        while (this.bombs > 0) {
            const draft = Math.floor(Math.random() * possibilities.length);
            const index = possibilities[draft];
            possibilities = possibilities.filter((val) => val != index);
            this.table[index] = {
                content: -1,
                isFlagged: false,
                isSelected: false,
            };
            this.bombs--;
        }
        possibilities.forEach((availableIndex) => {
            this.table[availableIndex] = {
                content: checkBombsAround(this.table, availableIndex, this.width, this.tableLength),
                isFlagged: false,
                isSelected: false
            };
        });
    }
    selectField(index) {
        const selectedField = this.table[index];
        const fieldElement = document.getElementById(index.toString());
        if (selectedField.isFlagged === true)
            return;
        if (selectedField.isSelected === false) {
            selectedField.isSelected = true;
            fieldElement.classList.add("selectedField");
        }
        if (selectedField.content === 0) {
            checkBlankArea(index, this.table, this.width, this.tableLength);
        }
        if (selectedField.content === -1) {
            createModal("loss");
            this.isGameRunning = false;
            fieldElement.style.backgroundColor = "#f00";
            this.table.forEach((field, fieldIndex) => {
                const fieldWithMine = document.getElementById(fieldIndex.toString());
                if (field.content === -1) {
                    field.isSelected === true;
                    fieldWithMine.classList.add("mine");
                }
            });
            return;
        }
        else {
            setFieldBackground(selectedField, fieldElement);
        }
        if (checkWin(this.clearFields, this.table))
            createModal("win");
    }
    flagField(index) {
        const selectedField = this.table[index];
        if (selectedField.isSelected)
            return;
        selectedField.isFlagged = !selectedField.isFlagged;
        selectedField.isFlagged ? document.getElementById(index.toString()).classList.add("flagged") : document.getElementById(index.toString()).classList.remove("flagged");
    }
    drawTable() {
        root.innerHTML = "";
        const modal = document.getElementById("modal");
        if (modal)
            modal.remove();
        this.table.forEach((_field, index) => {
            root.style.width = `${(30 * this.width)}px`;
            const fieldElement = document.createElement("div");
            fieldElement.id = index.toString();
            fieldElement.classList.add("field");
            fieldElement.oncontextmenu = (e) => {
                if (this.isGameRunning) {
                    e.preventDefault();
                    this.flagField(index);
                }
            };
            fieldElement.onclick = (e) => {
                if (this.isGameRunning) {
                    this.selectField(index);
                }
            };
            root.appendChild(fieldElement);
        });
    }
}
export default Game;

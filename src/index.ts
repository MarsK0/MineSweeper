import { start } from "repl"
import Game from "./models/Game.js"
import createNumInput from "./utils/createNumInput.js"

export interface Dimension{
  val: number
}

const screenWidth: number = window.screen.availWidth
let height: Dimension = {val: 10}
let width: Dimension = {val: 10}
let difficult: Dimension = {val: 25}
let game: Game | null;

const maxWidth: number = (Math.ceil((screenWidth-400)/175)*5)+10

const newGameButton: HTMLButtonElement = document.getElementById("newGameMenu")! as HTMLButtonElement
const widthSelector: HTMLInputElement = document.getElementById("width-custom-num")! as HTMLInputElement
const heightSelector: HTMLInputElement = document.getElementById("height-custom-num")! as HTMLInputElement
const difficultSelector: HTMLInputElement = document.getElementById("difficult-custom-num")! as HTMLInputElement
widthSelector.querySelector(".num-input")!.setAttribute("max", maxWidth.toString())

heightSelector.value = height.toString()
widthSelector.value = width.toString()
difficultSelector.value = difficult.toString()

export function startNewGame(): void{
  game = new Game(height.val, width.val, difficult.val)
  game.drawTable()
}

newGameButton.addEventListener("click", startNewGame)

createNumInput(widthSelector, width)
createNumInput(heightSelector, height)
createNumInput(difficultSelector, difficult)  

game = new Game(height.val, width.val, difficult.val)
game.drawTable()

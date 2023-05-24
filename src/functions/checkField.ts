import { IField } from "../models/Game.js";
import checkBlankArea from "./checkBlankArea.js";
import checkCorners from "./checkCorners.js";
import setFieldBackground from "./setFieldBackground.js";

function checkField(index: number, table: Array<IField>, width: number, tableLength: number): void{
  const fieldElement: HTMLElement = document.getElementById(index.toString())!
  const selectedField: IField = table[index]

  if(!selectedField.isFlagged){
    selectedField.isSelected = true
    fieldElement.classList.add("selectedField")
    setFieldBackground(selectedField, fieldElement)
  }

  if(selectedField.content === 0 && !selectedField.isFlagged){
    checkCorners(index, table, width, tableLength )
    checkBlankArea(index, table, width, tableLength)
  } 
}

export default checkField
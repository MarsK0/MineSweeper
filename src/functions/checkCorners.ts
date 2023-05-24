import { IField } from "../models/Game.js";
import checkBlankArea from "./checkBlankArea.js";
import checkSelectedField from "./checkSelected.js";
import setFieldBackground from "./setFieldBackground.js";

function checkCorners(index: number, table: Array<IField>, width: number, tableLength: number): void{

  if((index-width)>=0 && (index-1)>=0 && (index%width)!=0){//top-left corner
    const topField: IField = table[index-width]
    const leftField: IField = table[index-1]

    if(topField.content <= 8 && topField.content > 0 &&
       leftField.content <= 8 && leftField.content > 0){

        if((index-width-1)>=0 && checkSelectedField((index-width-1).toString())){
          const cornerIndex: number = index-width-1
          const fieldElement: HTMLElement = document.getElementById(cornerIndex.toString())!
          const selectedField: IField = table[cornerIndex]
      
          if(selectedField.content <= 8 && selectedField.content > 0 && !selectedField.isFlagged){
            selectedField.isSelected = true
            fieldElement.classList.add("selectedField")
            setFieldBackground(selectedField, fieldElement)
          }
      
          if(selectedField.content === 0 && !selectedField.isFlagged){
            selectedField.isSelected = true
            fieldElement.classList.add("selectedField")
            setFieldBackground(selectedField, fieldElement)
            checkBlankArea(cornerIndex, table, width, tableLength)
          } 
        }
      
    }
  }
  if((index-width)>=0 && (index+1)<=(tableLength) && ((index+1)%width)!=0){//top-right corner
    const topField: IField = table[index-width]
    const rightField: IField = table[index+1]

    if(topField.content <= 8 && topField.content > 0 &&
      rightField.content <= 8 && rightField.content > 0){

        if((index-width+1)>=0 && checkSelectedField((index-width+1).toString())){
          const cornerIndex: number = index-width+1
          const fieldElement: HTMLElement = document.getElementById(cornerIndex.toString())!
          const selectedField: IField = table[cornerIndex]
      
          if(selectedField.content <= 8 && selectedField.content > 0 && !selectedField.isFlagged){
            selectedField.isSelected = true
            fieldElement.classList.add("selectedField")
            setFieldBackground(selectedField, fieldElement)
          }
      
          if(selectedField.content === 0 && !selectedField.isFlagged) checkBlankArea(cornerIndex, table, width, tableLength)
        }
     
   }
  }
  if((index+width)<=(tableLength-1) && (index-1)>=0 && (index%width)!=0){//bottom-left corner
    const bottomField: IField = table[index+width]
    const leftField: IField = table[index-1]

    if(bottomField.content <= 8 && bottomField.content > 0 &&
       leftField.content <= 8 && leftField.content > 0){
        if((index+width-1)<=(tableLength-1) && checkSelectedField((index+width-1).toString())){
          const cornerIndex: number = index+width-1
          const fieldElement: HTMLElement = document.getElementById(cornerIndex.toString())!
          const selectedField: IField = table[cornerIndex]
      
          if(selectedField.content <= 8 && selectedField.content > 0 && !selectedField.isFlagged){
            selectedField.isSelected = true
            fieldElement.classList.add("selectedField")
            setFieldBackground(selectedField, fieldElement)
          }
      
          if(selectedField.content === 0 && !selectedField.isFlagged) checkBlankArea(cornerIndex, table, width, tableLength)
        } 
       }
  }
  if((index+width)<=(tableLength-1) && (index+1)<=(tableLength) && ((index+1)%width)!=0){//bottom-right corner
    const bottomField: IField = table[index+width]
    const rightField: IField = table[index+1]

    if(bottomField.content <= 8 && bottomField.content > 0 &&
      rightField.content <= 8 && rightField.content > 0){
        if((index+width+1)<=(tableLength-1) && checkSelectedField((index+width+1).toString())){
          const cornerIndex: number = index+width+1
          const fieldElement: HTMLElement = document.getElementById(cornerIndex.toString())!
          const selectedField: IField = table[cornerIndex]
      
          if(selectedField.content <= 8 && selectedField.content > 0 && !selectedField.isFlagged){
            selectedField.isSelected = true
            fieldElement.classList.add("selectedField")
            setFieldBackground(selectedField, fieldElement)
          }
      
          if(selectedField.content === 0 && !selectedField.isFlagged) checkBlankArea(cornerIndex, table, width, tableLength)
        }
      }
  }
}

export default checkCorners
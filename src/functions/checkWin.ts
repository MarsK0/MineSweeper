import { IField } from "../models/Game.js";

function checkWin(clearFields: number, table: Array<IField>): boolean{

  let selectedFields: number = 0

  table.forEach((field)=>{
    if(field.content <= 8 &&
       field.content >= 0 &&
       field.isSelected){
        selectedFields++
       }
  })

  return (clearFields === selectedFields)
  
}

export default checkWin
import { IField } from "../models/Game.js";
import checkCorners from "./checkCorners.js";
import checkField from "./checkField.js";
import checkSelectedField from "./checkSelected.js";


function checkBlankArea(index: number, table: Array<IField>, width: number, tableLength: number): void {

  checkCorners(index, table, width, tableLength)
  
  if((index-width)>=0 && checkSelectedField((index-width).toString()) ){//check top
    const nextIndex: number = index-width
    checkField(nextIndex, table, width, tableLength)
  }

  if((index+width)<=(tableLength-1) && checkSelectedField((index+width).toString()) ){//check bottom
    const nextIndex: number = index+width
    checkField(nextIndex, table, width, tableLength)
  }

  if((index-1)>=0 && (index%width)!=0 && checkSelectedField((index-1).toString()) ){//check left
    const nextIndex: number = index-1
    checkField(nextIndex, table, width, tableLength)
  }

  if((index+1)<=(tableLength) && ((index+1)%width)!=0 && checkSelectedField((index+1).toString())){//check right
    const nextIndex: number = index+1
    checkField(nextIndex, table, width, tableLength)
  }

}

export default checkBlankArea
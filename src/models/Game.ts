import checkBlankArea from "../functions/checkBlankArea.js"
import checkBombsAround from "../functions/checkBombsAround.js"
import setFieldBackground from "../functions/setFieldBackground.js"
import createModal from "../utils/createModal.js"
import checkWin from "../functions/checkWin.js"
const root = document.getElementById("root") as HTMLElement

export interface IField{
  content: number, //-1 = bomb
  isFlagged: boolean,
  isSelected: boolean
}

class Game{

  private table: Array<IField> = []
  private bombs: number
  private clearFields: number
  private isGameRunning: boolean = true
  private tableLength: number = (this.width*this.height-1)

  constructor(
    private height: number,
    private width: number,
    private difficult: number, //1 a 100
  ){
    
    const tableSize: number = this.height*this.width
    let possibilities: Array<number> = []

    for(let i = 0; i<(tableSize); i++){
      possibilities.push(i)
    }

    this.bombs = Math.ceil((tableSize/(10/3))*(difficult/100))
    this.clearFields = (this.height*this.width)-this.bombs

    while(this.bombs > 0){

      const draft: number = Math.floor(Math.random()*possibilities.length)
      const index: number = possibilities[draft]

      possibilities = possibilities.filter((val) => val != index)

      this.table[index] = {
        content: -1,
        isFlagged: false,
        isSelected: false,
      }

      this.bombs--

    }

    possibilities.forEach((availableIndex) => {
      this.table[availableIndex] = {
        content: checkBombsAround(this.table, availableIndex, this.width, this.tableLength),
        isFlagged: false,
        isSelected: false
      }
    })

  }

  selectField(index: number): void{
    
    const selectedField: IField = this.table[index]
    const fieldElement: HTMLElement =  document.getElementById(index.toString())!

    if(selectedField.isFlagged === true) return

    if(selectedField.isSelected === false){
      selectedField.isSelected = true
      fieldElement.classList.add("selectedField")
    }

    if(selectedField.content === 0){
      checkBlankArea(index, this.table, this.width, this.tableLength)
    }

    if(selectedField.content === -1){
      createModal("loss")
      this.isGameRunning = false
      fieldElement.style.backgroundColor = "#f00"
      
      this.table.forEach((field, fieldIndex) => {

        const fieldWithMine: HTMLElement = document.getElementById(fieldIndex.toString())!

        if(field.content === -1){
          field.isSelected === true
          fieldWithMine.classList.add("mine")
        }
      })

      return
    }else{
      setFieldBackground(selectedField, fieldElement)
    }

    if(checkWin(this.clearFields, this.table)){
      createModal("win")
      this.isGameRunning = false
    } 

  }

  flagField(index: number): void{

    const selectedField: IField = this.table[index]

    if(selectedField.isSelected) return

    selectedField.isFlagged = !selectedField.isFlagged

    selectedField.isFlagged ? document.getElementById(index.toString())!.classList.add("flagged") : document.getElementById(index.toString())!.classList.remove("flagged")

  }

  drawTable(): void{
    root.innerHTML = ""
    const modal = document.getElementById("modal")

    if(modal) modal.remove()

    this.table.forEach((_field, index) => {
      root.style.width = `${(30*this.width)}px`

      const fieldElement: HTMLElement = document.createElement("div")
      fieldElement.id = index.toString()
      fieldElement.classList.add("field")

      fieldElement.oncontextmenu = (e) => {
        if(this.isGameRunning){
          e.preventDefault()
          this.flagField(index)
        }
      }

      fieldElement.onclick = (e) => {
        if(this.isGameRunning){
          this.selectField(index)
        }
      }

      root.appendChild(fieldElement)
    })

  }

}

export default Game
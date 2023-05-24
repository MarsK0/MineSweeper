import { IField } from "../models/Game.js";

function setFieldBackground(selectedField: IField, fieldElement: HTMLElement): void{
  switch(selectedField.content){
    case 1:
      fieldElement.style.backgroundImage = "url(./imgs/1.png)"
    break;
    case 2:
      fieldElement.style.backgroundImage = "url(./imgs/2.png)"
    break;
    case 3:
      fieldElement.style.backgroundImage = "url(./imgs/3.png)"
    break;
    case 4:
      fieldElement.style.backgroundImage = "url(./imgs/4.png)"
    break;
    case 5:
      fieldElement.style.backgroundImage = "url(./imgs/5.png)"
    break;
    case 6:
      fieldElement.style.backgroundImage = "url(./imgs/6.png)"
    break;
    case 7:
      fieldElement.style.backgroundImage = "url(./imgs/7.png)"
    break;
    case 8:
      fieldElement.style.backgroundImage = "url(./imgs/8.png)"
    break;
    default:
      fieldElement.style.backgroundImage = "url(./imgs/0.png)"
  }
}

export default setFieldBackground
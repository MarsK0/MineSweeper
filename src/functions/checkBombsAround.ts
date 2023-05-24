import { IField } from "../models/Game.js"
import {
  checkBombTopLeft, checkBombTop, checkBombTopRight,
  checkBombLeft, checkBombRight,
  checkBombBottomLeft, checkBombBottom, checkBombBottomRight
} from "./checkBombs.js"

function checkBombsAround(table: Array<IField>, availableIndex: number, width: number, tableLength: number): number {
  let bombsAround: number = 0

  if (availableIndex === 0) { //check topleft corner field

    if (checkBombRight(availableIndex, table)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++
    if (checkBombBottomRight(availableIndex, table, width)) bombsAround++

  } else if ((availableIndex + 1) === width) { //checkBomb topright corner field

    if (checkBombLeft(availableIndex, table)) bombsAround++
    if (checkBombBottomLeft(availableIndex, table, width)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++

  } else if (availableIndex - 1 === tableLength - width) { //checkBomb bottomleft corner field

    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombTopRight(availableIndex, table, width)) bombsAround++
    if (checkBombRight(availableIndex, table)) bombsAround++

  } else if (availableIndex === tableLength) { //checkBomb bottomright corner field

    if (checkBombTopLeft(availableIndex, table, width)) bombsAround++
    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombLeft(availableIndex, table)) bombsAround++

  } else if (availableIndex < width) {//top-line fields

    if (checkBombLeft(availableIndex, table)) bombsAround++
    if (checkBombRight(availableIndex, table)) bombsAround++
    if (checkBombBottomLeft(availableIndex, table, width)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++
    if (checkBombBottomRight(availableIndex, table, width)) bombsAround++

  } else if (availableIndex % width === 0) {//left-line fields

    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombTopRight(availableIndex, table, width)) bombsAround++
    if (checkBombRight(availableIndex, table)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++
    if (checkBombBottomRight(availableIndex, table, width)) bombsAround++

  } else if ((availableIndex + 1) % width === 0) {//right-line fields

    if (checkBombTopLeft(availableIndex, table, width)) bombsAround++
    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombLeft(availableIndex, table)) bombsAround++
    if (checkBombBottomLeft(availableIndex, table, width)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++

  } else if ((availableIndex + width) > tableLength) {//bottom-line field

    if (checkBombTopLeft(availableIndex, table, width)) bombsAround++
    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombTopRight(availableIndex, table, width)) bombsAround++
    if (checkBombLeft(availableIndex, table)) bombsAround++
    if (checkBombRight(availableIndex, table)) bombsAround++

  } else {//middle fields
    if (checkBombTopLeft(availableIndex, table, width)) bombsAround++
    if (checkBombTop(availableIndex, table, width)) bombsAround++
    if (checkBombTopRight(availableIndex, table, width)) bombsAround++
    if (checkBombLeft(availableIndex, table)) bombsAround++
    if (checkBombRight(availableIndex, table)) bombsAround++
    if (checkBombBottomLeft(availableIndex, table, width)) bombsAround++
    if (checkBombBottom(availableIndex, table, width)) bombsAround++
    if (checkBombBottomRight(availableIndex, table, width)) bombsAround++
  }

  return bombsAround
}

export default checkBombsAround
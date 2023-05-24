import { IField } from "../models/Game";

function checkBombTopLeft(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex - width - 1] != null && table[availableIndex - width - 1].content === -1) return true

  return false
}
function checkBombTop(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex - width] != null && table[availableIndex - width].content === -1) return true

  return false
}
function checkBombTopRight(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex - width + 1] != null && table[availableIndex - width + 1].content === -1) return true

  return false
}
function checkBombLeft(availableIndex: number, table: Array<IField>): boolean {
  if (table[availableIndex - 1] != null && table[availableIndex - 1].content === -1) return true

  return false
}
function checkBombRight(availableIndex: number, table: Array<IField>): boolean {
  if (table[availableIndex + 1] != null && table[availableIndex + 1].content === -1) return true

  return false
}
function checkBombBottomLeft(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex + width - 1] != null && table[availableIndex + width - 1].content === -1) return true

  return false
}
function checkBombBottom(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex + width] != null && table[availableIndex + width].content === -1) return true

  return false
}
function checkBombBottomRight(availableIndex: number, table: Array<IField>, width: number): boolean {
  if (table[availableIndex + width + 1] != null && table[availableIndex + width + 1].content === -1) return true

  return false
}

export { checkBombTopLeft, checkBombTop, checkBombTopRight, checkBombLeft, checkBombRight, checkBombBottomLeft, checkBombBottom, checkBombBottomRight }
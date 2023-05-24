function checkBombTopLeft(availableIndex, table, width) {
    if (table[availableIndex - width - 1] != null && table[availableIndex - width - 1].content === -1)
        return true;
    return false;
}
function checkBombTop(availableIndex, table, width) {
    if (table[availableIndex - width] != null && table[availableIndex - width].content === -1)
        return true;
    return false;
}
function checkBombTopRight(availableIndex, table, width) {
    if (table[availableIndex - width + 1] != null && table[availableIndex - width + 1].content === -1)
        return true;
    return false;
}
function checkBombLeft(availableIndex, table) {
    if (table[availableIndex - 1] != null && table[availableIndex - 1].content === -1)
        return true;
    return false;
}
function checkBombRight(availableIndex, table) {
    if (table[availableIndex + 1] != null && table[availableIndex + 1].content === -1)
        return true;
    return false;
}
function checkBombBottomLeft(availableIndex, table, width) {
    if (table[availableIndex + width - 1] != null && table[availableIndex + width - 1].content === -1)
        return true;
    return false;
}
function checkBombBottom(availableIndex, table, width) {
    if (table[availableIndex + width] != null && table[availableIndex + width].content === -1)
        return true;
    return false;
}
function checkBombBottomRight(availableIndex, table, width) {
    if (table[availableIndex + width + 1] != null && table[availableIndex + width + 1].content === -1)
        return true;
    return false;
}
export { checkBombTopLeft, checkBombTop, checkBombTopRight, checkBombLeft, checkBombRight, checkBombBottomLeft, checkBombBottom, checkBombBottomRight };

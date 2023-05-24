import checkBlankArea from "./checkBlankArea.js";
import checkCorners from "./checkCorners.js";
import setFieldBackground from "./setFieldBackground.js";
function checkField(index, table, width, tableLength) {
    const fieldElement = document.getElementById(index.toString());
    const selectedField = table[index];
    if (!selectedField.isFlagged) {
        selectedField.isSelected = true;
        fieldElement.classList.add("selectedField");
        setFieldBackground(selectedField, fieldElement);
    }
    if (selectedField.content === 0 && !selectedField.isFlagged) {
        checkCorners(index, table, width, tableLength);
        checkBlankArea(index, table, width, tableLength);
    }
}
export default checkField;

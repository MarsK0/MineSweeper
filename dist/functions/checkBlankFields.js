import { checkBlankFieldTopLeft, checkBlankFieldTop, checkBlankFieldTopRight, checkBlankFieldLeft, checkBlankFieldRight, checkBlankFieldBottomLeft, checkBlankFieldBottom, checkBlankFieldBottomRight } from "./checkFieldsAround.js";
function checkBlankFields(fieldIndex, table, width, tableLength, checkedFields) {
    if (fieldIndex === 0 && checkedFields.indexOf(fieldIndex) === -1) { //check topleft corner field
        checkedFields.push(fieldIndex);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomRight(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if ((fieldIndex + 1) === width && checkedFields.indexOf(fieldIndex) === -1) { //check topright corner field
        checkedFields.push(fieldIndex);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if (fieldIndex - 1 === tableLength - width && checkedFields.indexOf(fieldIndex) === -1) { //check bottomleft corner field
        checkedFields.push(fieldIndex);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTopRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if (fieldIndex === tableLength && checkedFields.indexOf(fieldIndex) === -1) { //check bottomright corner field
        checkedFields.push(fieldIndex);
        checkBlankFieldTopLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if (fieldIndex < width && checkedFields.indexOf(fieldIndex) === -1) { //top-line fields
        checkedFields.push(fieldIndex);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomRight(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if (fieldIndex % width === 0 && checkedFields.indexOf(fieldIndex) === -1) { //left-line fields
        checkedFields.push(fieldIndex);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTopRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomRight(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if ((fieldIndex + 1) % width === 0 && checkedFields.indexOf(fieldIndex) === -1) { //right-line fields
        checkedFields.push(fieldIndex);
        checkBlankFieldTopLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if ((fieldIndex + width) > tableLength && checkedFields.indexOf(fieldIndex) === -1) { //bottom-line field
        checkedFields.push(fieldIndex);
        checkBlankFieldTopLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTopRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
    }
    else if (checkedFields.indexOf(fieldIndex) === -1) { //middle fields
        checkBlankFieldTopLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTop(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldTopRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldRight(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomLeft(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottom(fieldIndex, table, width, tableLength, checkedFields);
        checkBlankFieldBottomRight(fieldIndex, table, width, tableLength, checkedFields);
    }
}
export default checkBlankFields;

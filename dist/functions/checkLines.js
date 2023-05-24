import setFieldBackground from "./setFieldBackground.js";
function checkTop(index, table, width, tableLength) {
    let i = 0;
    while (table[index - (width * i)]) {
        const field = table[index - (width * i)];
        const fieldElement = document.getElementById((index - (width * i)).toString());
        field.isSelected = true;
        fieldElement.classList.add("selectedField");
        setFieldBackground(field, fieldElement);
        if (field.content > 0)
            break;
        i++;
    }
}
function checkBottom(index, table, width, tableLength) {
    let i = 0;
    while (table[index + (width * i)]) {
        const field = table[index + (width * i)];
        const fieldElement = document.getElementById((index + (width * i)).toString());
        field.isSelected = true;
        fieldElement.classList.add("selectedField");
        setFieldBackground(field, fieldElement);
        if (field.content > 0)
            break;
        i++;
    }
}
function checkLeft(index, table, width, tableLength) {
    let i = 0;
    while (((index - i) % width) > 0) {
        const field = table[index - i - 1];
        const fieldElement = document.getElementById((index - i - 1).toString());
        field.isSelected = true;
        fieldElement.classList.add("selectedField");
        setFieldBackground(field, fieldElement);
        if (field.content > 0)
            break;
        i++;
    }
}
function checkRight(index, table, width, tableLength) {
    let i = 0;
    while (((index + i) % width) < (width)) {
        const field = table[index + i + 1];
        const fieldElement = document.getElementById((index + i + 1).toString());
        field.isSelected = true;
        fieldElement.classList.add("selectedField");
        setFieldBackground(field, fieldElement);
        if (field.content > 0)
            break;
        i++;
    }
}
export { checkTop, checkBottom, checkLeft, checkRight };

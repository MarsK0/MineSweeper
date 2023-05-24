function checkWin(clearFields, table) {
    let selectedFields = 0;
    table.forEach((field) => {
        if (field.content <= 8 &&
            field.content >= 0 &&
            field.isSelected) {
            selectedFields++;
        }
    });
    return (clearFields === selectedFields);
}
export default checkWin;

function createNumInput(input, value) {
    const numInput = input.querySelector(".num-input");
    const arrUp = input.querySelector(".fa-angle-up");
    const arrDown = input.querySelector(".fa-angle-down");
    numInput.value = value.val.toString();
    arrUp.addEventListener("click", () => {
        numInput.stepUp();
        value.val = parseInt(numInput.value);
        checkMaxMin();
    });
    arrDown.addEventListener("click", () => {
        numInput.stepDown();
        value.val = parseInt(numInput.value);
        checkMaxMin();
    });
    function checkMaxMin() {
        const numInputValue = parseInt(numInput.value);
        const numInputMax = parseInt(numInput.max);
        const numInputMin = parseInt(numInput.min);
        if (numInputValue === numInputMax) {
            input.style.paddingTop = "0.8em";
            input.style.height = "5em";
            arrUp.style.display = "none";
            input.style.paddingBottom = "0";
            arrDown.style.display = "block";
        }
        else if (numInputValue === numInputMin) {
            input.style.paddingBottom = "0.8em";
            input.style.height = "5em";
            arrDown.style.display = "none";
            input.style.paddingTop = "0";
            arrUp.style.display = "block";
        }
        else {
            input.style.padding = "0";
            input.style.height = "7em";
            arrUp.style.display = "block";
            arrDown.style.display = "block";
        }
    }
}
export default createNumInput;
